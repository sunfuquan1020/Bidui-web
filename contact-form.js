// ============================================================
//  联系表单 —— 提交后把留言发送到公司邮箱
//
//  【需要配置的地方只有下面一行 CONTACT_FORM_ENDPOINT】
//
//  本站是纯静态网站，浏览器自己发不了邮件，必须由一个服务端接口
//  代为发送。推荐用 Formspree（免费额度够用，无需自己搭服务器）：
//    1. 打开 https://formspree.io 注册账号；
//    2. 新建一个 Form，收件邮箱填 infor@bidui.com.cn；
//    3. 到邮箱点确认链接激活；
//    4. 把它给出的地址（形如 https://formspree.io/f/abcdwxyz）
//       粘贴到下面的 CONTACT_FORM_ENDPOINT 里，保存即可。
//
//  也可以填自己后端的接口地址，接口接收 JSON，字段见下方 payload。
//
//  留空时：表单会退而求其次，直接打开访客本机的邮件客户端并
//  预填好收件人和内容（需要访客手动点“发送”）。
// ============================================================

const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/xjgnaeqd'; // 例：'https://formspree.io/f/abcdwxyz'
const CONTACT_EMAIL = 'infor@bidui.com.cn';

const STATUS_CLASS = {
    sending: 'form-status is-sending',
    success: 'form-status is-success',
    error: 'form-status is-error'
};

/**
 * 取当前语言的表单文案（跟随页面右上角的中/英切换）。
 * @returns {Record<string, string>}
 */
function getFormText() {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'zh';
    return translations[lang].contact.form;
}

/**
 * @param {HTMLFormElement} form
 * @returns {{ name: string, email: string, phone: string, message: string }}
 */
function readFormValues(form) {
    return {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.trim(),
        message: form.elements.message.value.trim()
    };
}

/**
 * 邮件正文（服务端接口和 mailto 兜底共用，保证两条路内容一致）。
 * @param {{ name: string, email: string, phone: string, message: string }} values
 * @returns {string}
 */
function buildMailBody(values) {
    return [
        `姓名 / Name: ${values.name}`,
        `邮箱 / Email: ${values.email}`,
        `电话 / Phone: ${values.phone}`,
        '',
        '留言 / Message:',
        values.message,
        '',
        `— 来自官网联系表单 ${window.location.href}`
    ].join('\n');
}

/**
 * @param {HTMLElement} statusEl
 * @param {'sending'|'success'|'error'} state
 * @param {string} text
 */
function showStatus(statusEl, state, text) {
    statusEl.className = STATUS_CLASS[state];
    statusEl.textContent = text;
}

/**
 * 未配置接口时的兜底：打开访客本机邮件客户端，收件人预填公司邮箱。
 * @param {{ name: string, email: string, phone: string, message: string }} values
 */
function openMailClient(values) {
    const subject = `官网留言 - ${values.name}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMailBody(values))}`;
    window.location.href = href;
}

/**
 * 提交到服务端接口（Formspree 或自建后端）。
 * @param {{ name: string, email: string, phone: string, message: string }} values
 * @returns {Promise<void>}
 */
async function postToEndpoint(values) {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            ...values,
            _subject: `官网留言 - ${values.name}`,
            _replyto: values.email,
            body: buildMailBody(values)
        })
    });

    if (!response.ok) {
        throw new Error(`表单接口返回 ${response.status}`);
    }
}

/**
 * @param {SubmitEvent} event
 */
async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const statusEl = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');
    const text = getFormText();

    if (!form.reportValidity()) return;

    // 蜜罐字段被填了 = 机器人，静默丢弃并假装成功
    if (form.elements._gotcha.value) {
        form.reset();
        showStatus(statusEl, 'success', text.success);
        return;
    }

    const values = readFormValues(form);

    if (!CONTACT_FORM_ENDPOINT) {
        showStatus(statusEl, 'success', text.mailtoHint);
        openMailClient(values);
        return;
    }

    const submitLabel = text.submit;
    submitButton.disabled = true;
    submitButton.textContent = text.sending;
    showStatus(statusEl, 'sending', text.sending);

    try {
        await postToEndpoint(values);
        form.reset();
        showStatus(statusEl, 'success', text.success);
    } catch (error) {
        showStatus(statusEl, 'error', text.error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = submitLabel;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) form.addEventListener('submit', handleSubmit);
});
