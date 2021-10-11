/*
 * Modal
 *
 * The script implements modal windows, which can be reused for
 * several cases
 *
 * Example of using:
 *
 * <div class="wrapper">
 *   <div class="models">
 *     <button class="btn-success modal-btn-show">show modal</button>
 *       <div class="modal-wrapper modal-hide">
 *        <div class="modal-content">
 *          <div class="modal-btn-close"></div>
 *          <h1>hello, world</h1>
 *        </div>
 *     </div>
 *   </div>
 * </div>
 */
(function () {
  let modalContainers = document.getElementsByClassName("models");
  for (let i = 0; i < modalContainers.length; ++i) {
    console.log(modalContainers[i]);

    let button_for_open_dom =
      modalContainers[i].getElementsByClassName("modal-btn-show")[0];
    let modal_wrapper_dom =
      modalContainers[i].getElementsByClassName("modal-wrapper")[0];
    let button_for_close_dom =
      modalContainers[i].getElementsByClassName("modal-btn-close")[0];

    console.log(button_for_open_dom);

    button_for_open_dom.addEventListener("click", () => {
      modal_wrapper_dom.classList.toggle("modal-hide");
    });

    button_for_close_dom.addEventListener("click", () => {
      modal_wrapper_dom.classList.toggle("modal-hide");
    });
  }
})();
