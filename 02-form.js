import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const t=document.querySelector(".feedback-form"),m=document.querySelector("button"),s=JSON.parse(localStorage.getItem("feedback-form-state")),a={email:"",message:""};function l(e){e&&(t.elements.email.value=e.email,t.elements.message.value=e.message,a.email=e.email,a.message=e.message)}l(s);t.addEventListener("input",e=>{e.target.name==="email"?a.email=e.target.value.trim():a.message=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))});m.addEventListener("click",e=>{e.preventDefault(),(a.email===""||a.message==="")&&alert("Lütfen bütün alanları doldurunuz"),console.log(a),t.reset(),localStorage.clear(),a.email="",a.message=""});
//# sourceMappingURL=02-form.js.map
