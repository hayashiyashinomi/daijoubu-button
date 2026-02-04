// app/javascript/daijoubu.js

function bind() {
    const root = document.querySelector("[data-messages]");
    if (!root) return;
    if (root.dataset.bound === "1") return; // 二重バインド防止
    root.dataset.bound = "1";
  
    // data-messages（JSON文字列）→ 配列に
    let messages = [];
    try {
      messages = JSON.parse(root.dataset.messages || "[]");
    } catch (e) {
      messages = [];
    }
  
    // 要素取得
    const msg     = document.getElementById("message");
    const okBtn   = document.getElementById("ok-button");
    const copyBtn = document.getElementById("copy-button");
    const toast   = document.getElementById("toast");
  
    // 念のための初期表示（翻訳リストが空でも文言が出る）
    if (msg && !msg.textContent.trim()) {
      msg.textContent = "ボタンを押すと「大丈夫」が表示されます";
    }
  
    // 「押す」でランダム表示
    okBtn?.addEventListener("click", () => {
      if (!messages.length) return; // 空なら何もしない
      const random = messages[Math.floor(Math.random() * messages.length)];
      msg.textContent = random;
    });
  
    // 「コピー」でトースト表示（ラベル固定＆多重タイマー防止）
    let hideTimer = null;
    copyBtn?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(msg?.textContent || "");
        if (toast) {
          toast.textContent = "コピーしました！";
          toast.classList.remove("hidden");
          if (hideTimer) clearTimeout(hideTimer);
          hideTimer = setTimeout(() => {
            toast.classList.add("hidden");
            toast.textContent = "";
          }, 1200);
        }
      } catch (e) {
        alert("コピーに失敗しました");
      }
    });
  }
  
  // Turbo/素のDOMのどちらでも動くように
  document.addEventListener("turbo:load", bind);
  document.addEventListener("DOMContentLoaded", bind);
  if (document.readyState === "interactive" || document.readyState === "complete") {
    bind();
  }
  