(()=>{const e={openModalBtn:document.querySelectorAll("[sellers-data-modal-open]"),closeModalBtn:document.querySelector("[sellers-data-modal-close]"),modal:document.querySelector("[sellers-data-modal]"),submitBtn:document.querySelector(".submit-btn"),form:document.querySelector("form")};function t(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=e.modal.classList.contains("is-hidden")?"auto":"hidden"}e.openModalBtn.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t),e.submitBtn.addEventListener("click",(function(t){t.preventDefault(),e.form.checkValidity()?(e.modal.classList.add("is-hidden"),setTimeout((()=>{e.form.submit()}),300)):e.form.reportValidity()}))})();
//# sourceMappingURL=index.25e34b20.js.map
