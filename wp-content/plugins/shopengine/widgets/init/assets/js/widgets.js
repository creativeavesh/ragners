function shopengine_currency_switcher(e){let t=new URL(window.location),n=new URLSearchParams(t.search);n.set("currency",e),window.location=window.location.origin+window.location.pathname+"?"+n.toString()}!function(e,t){"use strict";var n=function(e,t){let n=0;return function(...o){let i=(new Date).getTime();if(i-n<t)return!1;window.intervalID=setTimeout((function(){e(...o)}),t),n=i}},o=function(e,t){let n;return function(...o){n&&clearTimeout(n),n=setTimeout((function(){e(...o)}),t)}},i=function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},r=function(t,n){let o=t?e(t).get(0):null;if("undefined"==typeof Swiper){return elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>new Swiper(o,n)))}{const e=new Swiper(o,n);return Promise.resolve(e)}},s=function(t){var n="target"in t?t.target.closest("a"):t[0];if(n){var o=e(n).parents(".wc-tabs"),i=o.find(".shopengine-tabs-line"),r=o[0].getBoundingClientRect(),s=n.getBoundingClientRect().x-r.x;i.animate({width:`${s}px`},100,(()=>{i.animate({left:`${s}px`,width:"30px"},100)}))}},a={get_url:function(e,t){return e.wc_ajax_url.toString().replace("%%endpoint%%",t)},is_blocked:function(e){return e.is(".processing")||e.parents(".processing").length},block:function(e){this.is_blocked(e)||e.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(e){e.removeClass("processing").unblock()},show_notice:function(t,n){n||(n=e(".woocommerce-notices-wrapper:first")||e(".cart-empty").closest(".woocommerce")||e(".woocommerce-cart-form")),n.prepend(t)},remove_duplicate_notices:function(t){var n=[],o=t;return t.each((function(t){var i=e(this).text();"undefined"==typeof n[i]?n[i]=!0:o.splice(t,1)})),o},update_cart_totals_div:function(t){e(".cart_totals").replaceWith(t),e(document.body).trigger("updated_cart_totals")},update_wc_div:function(t,n){var o=e.parseHTML(t),i=e(".shopengine-cart-form",o),r=e(".cart_totals",o),s=this.remove_duplicate_notices(e(".woocommerce-error, .woocommerce-message, .woocommerce-info",o));0!==e(".shopengine-cart-form").length?(n||e(".woocommerce-error, .woocommerce-message, .woocommerce-info").remove(),0===i.length?(e(document.body).trigger("wc_cart_emptied"),window.location.reload()):(e(".woocommerce-checkout").length&&e(document.body).trigger("update_checkout"),e(".shopengine-cart-form").replaceWith(i),e(".shopengine-cart-form").find(':input[name="update_cart"]').prop("disabled",!0).attr("aria-disabled",!0),s.length>0&&this.show_notice(s),this.update_cart_totals_div(r)),e(document.body).trigger("updated_wc_div")):window.location.reload()}},c={init:function(){var n={"shopengine-archive-view-mode.default":c.Archive_View_Mode,"shopengine-related.default":c.Related_Slider,"shopengine-cross-sells.default":c.Cross_Sells_Slider,"shopengine-up-sells.default":c.Up_Sells_Slider,"shopengine-product-tabs.default":c.Product_Tabs,"shopengine-product-review.default":c.Product_Review,"shopengine-single-product-images.default":c.Single_Product_Images,"shopengine-cart-table.default":c.Cart_Table,"shopengine-cart-totals.default":c.Cart_Totals,"shopengine-filter-orderby.default":c.Filter_OrderBy,"shopengine-checkout-coupon-form.default":c.Checkout_Coupon_Form,"shopengine-checkout-review-order.default":c.Checkout_Review_Order,"shopengine-checkout-form-shipping.default":c.Checkout_Form_Shipping,"shopengine-filter-products-per-page.default":c.Filter_ProductsPerPage,"shopengine-archive-products.default":c.Archive_Products,"shopengine-advanced-search.default":c.Advanced_Search,"shopengine-add-to-cart.default":c.Add_To_Cart,"shopengine-categories.default":c.Categories,"shopengine-deal-products.default":c.Deal_Products,"shopengine-flash-sale-products.default":c.Deal_Products,"shopengine-filterable-product-list.default":c.FilterableProductList,"shopengine-checkout-form-login.default":c.CheckoutFormLogin,"shopengine-checkout-shipping-methods.default":c.ShippingMethod};e.each(n,(function(e,n){t.hooks.addAction("frontend/element_ready/"+e,n)}))},Archive_View_Mode:function(t){t.on("click",".shopengine-archive-view-mode-switch",(function(t){let n=e(this),o=n.data("view");if(t.preventDefault(),window.innerWidth<575)return!1;n.addClass("isactive"),n.siblings().removeClass("isactive"),e(document).find(".shopengine-archive-products").removeClass((function(t,n){let o=n.split(" "),i=[];return e.each(o,(function(e,t){/shopengine-archive-products--view-.*/.test(t)&&i.push(t)})),i.join(" ")})).addClass("shopengine-archive-products--view-"+o)}))},Advanced_Search:function(t){let o=t.find(".shopengine-search-form"),i=o.attr("action"),r=o.find(".shopengine-search-result-container"),s="";o.on("submit",(function(n){n.preventDefault();let a=e(this).serialize(),c=new URLSearchParams(a),l=c.get("s"),d=c.get("nonce");s=l,e(this).data("submitted-data")!=a&&null!==l&&""!=l&&e.ajax({url:i,method:"GET",data:a,dataType:"html",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",d),o.addClass("is-loading").data("submitted-data",a)},success:function(n){o.removeClass("is-loading").addClass("sr-container-opened"),r.find(".shopengine-search-result").html(n);let i=r.find(".shopengine-search-result")[0].getBoundingClientRect().height;i<=500?r.css({height:`${i}px`}):r.css({height:"500px"}),SimpleScrollbar.unbindEl(r[0]),SimpleScrollbar.initEl(r[0]),e("body").addClass("shopengine-sr-container-open-body"),t.find(".shopengine-search-product__item--title a").map((function(t,n){let o=e(n).text();return o=o.replaceAll(s,`<strong>${s}</strong>`),e(n).html(o),!0}))}})})),e(document).on("click",".shopengine-sr-container-open-body",(function(t){e(t.target).parents(".shopengine-search-form").length>0||(o.removeClass("sr-container-opened"),e("body").removeClass("shopengine-sr-container-open-body"))})),o.on("keyup change",".shopengine-advanced-search-input, .shopengine-ele-nav-search-select",n((function(){o.submit()}),500))},Archive_Products:function(t){var n={main:t.find(".shopengine-archive-products"),product:t.find(".shopengine-archive-products ul.products"),pagi:t.find(".woocommerce-pagination"),style:t.find(".shopengine-archive-products").data("pagination"),is_tooltip:t.find(".archive-product-container").data("tooltip"),tooltip_container:t.find(".archive-product-container")};if("yes"===n.is_tooltip){var r=e(n.tooltip_container).find(".button"),s=e(n.tooltip_container).find(".shopengine-quickview-trigger"),a=e(n.tooltip_container).find(".shopengine-wishlist"),c=e(n.tooltip_container).find(".shopengine-comparison"),l=e(n.tooltip_container).find(".shopengine_direct_checkout");function p(t,n){n=`<p class='tooltiptext'>${n}</p>`;t.each((function(t,o){e("body").hasClass("theme-kadence")&&e(o).find("span").length&&e(o).find("span").remove(),e(o).is(".add_to_cart_button, .product_type_variable, .product_type_grouped, .product_type_external, .product_type_simple")?o.insertAdjacentHTML("beforeend",`<p class='tooltiptext'>${o.text}</p>`):o.insertAdjacentHTML("beforeend",n)}))}r.length>0&&p(r,"Add to Cart"),s.length>0&&p(s,"Quick View"),a.length>0&&p(a,"Add to Wishlist"),c.length>0&&p(c,"Compare"),l.length>0&&p(l,"Direct Checkout")}function d(o,i,r){e.ajax({url:i,beforeSend:function(){n.main.addClass("is-loading"),"numeric"!==n.style&&"default"!==n.style||window.history.pushState({},document.title,i)},success:function(o){let i=e(o).find(".shopengine-archive-products").first(),s=(t.find(".shopengine-archive-products"),t.find(".shopengine-archive-products ul.products")),a=t.find(".woocommerce-pagination"),c=t.find(".shopengine-archive-products").data("pagination");if("numeric"===c||"default"===c)n.main.html(i.html()),t[0].scrollIntoView();else if("load-more"===c){let t=e(o).find(".shopengine-archive-products ul.products"),n=e(o).find(".woocommerce-pagination");s.append(t.html()),a.html(n.html())}else if("load-more-on-scroll"===c&&r){let t=e(o).find(".shopengine-archive-products ul.products"),n=e(o).find(".woocommerce-pagination");s.append(t.html()),a.html(n.html())}let l=e(".shopengine-archive-result-count > p");l.length&&l.text(i.find("p.woocommerce-result-count").text())},complete:function(){n.main.removeClass("is-loading");if(!["load-more","load-more-on-scroll"].includes(o)){var i=t.offset().top;e(window).scrollTop(i)}}})}"load-more-on-scroll"===n.style&&e(document).on("scroll",o((function(){if(i(n.pagi[0])){let e=t.find(".woocommerce-pagination .next").attr("href");e&&d(n.style,e,!0)}}),500)),n.pagi.length&&e(t).on("click","a.page-numbers",(function(e){e.preventDefault(),e.stopPropagation(),d(n.style,this.href,!1)}))},Categories:function(t){e(".shopengine-categories ul.children").hide(),e(".shopengine-categories li").removeClass("active opened"),t.find(".shopengine-categories li").on("click",(function(t){if("undefined"!=typeof t.target.href||!e(t.target).hasClass("cat-parent"))return;t.preventDefault(),t.stopPropagation();let n=e(t.target);n.hasClass("children-expended")?(n.removeClass("children-expended"),n.find("> .children").slideUp()):(n.addClass("children-expended"),n.find("> .children").slideDown())}))},Product_Tabs:function(e){e.find(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");let t=e.find(".tabs.wc-tabs");if(t.length){let e=document.createElement("div");e.setAttribute("class","shopengine-tabs-line"),t[0].appendChild(e),t.on("click",s),setTimeout((function(){s(t.find("li.active a"))}),250)}},Related_Slider:function(e){let t=e.find(".shopengine-related.slider-enabled");if(t.length){let n=t.data("controls"),o=Boolean(n.slider_enabled),i=parseInt(n.slides_to_show),s=parseInt(n.slides_to_show_mobile),a=parseInt(n.slides_to_show_tablet),c=Boolean(n.slider_loop),l=Boolean(n.slider_autoplay),d=parseInt(n.slider_autoplay_delay),p=parseInt(n.slider_space_between),u=e.find(".slider-enabled .related").get(0),h=e.find(".swiper-button-next").get(0),f=e.find(".swiper-button-prev").get(0),g=e.find(".swiper-pagination").get(0);r(u,{direction:"horizontal",slidesPerView:i,spaceBetween:p,loop:c,breakpoints:{270:{slidesPerView:s||1},540:{slidesPerView:a||2},770:{slidesPerView:a||3},900:{slidesPerView:i}},wrapperClass:"products",slideClass:"product",grabCursor:!0,freeMode:!0,centeredSlides:!1,allowTouchMove:o,speed:500,parallax:!0,autoplay:!!l&&{delay:d},effect:"slide",pagination:{el:g,type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:h,prevEl:f},on:{snapGridLengthChange:function(){var e=this.slidesSizesGrid[0];this.slides.each((function(){this.style.maxWidth=e-10+"px",-1!==this.className.indexOf(" last ")&&this.classList.remove("last")}))}}})}},Cross_Sells_Slider:function(e){let t=e.find(".shopengine-cross-sells.slider-enabled");if(t.length){let n=t.data("controls"),o=Boolean(n.slider_enabled),i=parseInt(n.slides_to_show),s=Boolean(n.slider_loop),a=Boolean(n.slider_autoplay),c=parseInt(n.slider_autoplay_delay),l=parseInt(n.slider_space_between),d=parseInt(n.selected_item),p=e.find(".swiper-pagination").get(0),u=e.find(".swiper-button-next").get(0),h=e.find(".swiper-button-prev").get(0),f=e.find(".shopengine-cross-sells.slider-enabled > .cross-sells").get(0);i>=d&&(s=!1),r(f,{direction:"horizontal",slidesPerView:i,spaceBetween:l,loop:s,breakpoints:{320:{slidesPerView:1},540:{slidesPerView:2},770:{slidesPerView:3},900:{slidesPerView:i}},wrapperClass:"products",slideClass:"product",grabCursor:!0,freeMode:!0,centeredSlides:!1,allowTouchMove:o,speed:500,parallax:!0,autoplay:!!a&&{delay:c},effect:"slide",pagination:{el:p,type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:u,prevEl:h},on:{snapGridLengthChange:function(){var e=this.slidesSizesGrid[0];this.slides.each((function(){this.style.maxWidth=e-10+"px;",-1!==this.className.indexOf(" last ")&&this.classList.remove("last")}))}}})}},Up_Sells_Slider:function(e){let t=e.find(".shopengine-up-sells.slider-enabled");if(t.length){let n=t.data("controls"),o=Boolean(n.slider_enabled),i=parseInt(n.slides_to_show),s=Boolean(n.slider_loop),a=Boolean(n.slider_autoplay),c=parseInt(n.slider_autoplay_delay),l=parseInt(n.slider_space_between),d=parseInt(n.selected_item),p=e.find(".swiper-pagination").get(0),u=e.find(".swiper-button-next").get(0),h=e.find(".swiper-button-prev").get(0),f=e.find(".up-sells.products").get(0);i>=d&&(s=!1);r(f,{direction:"horizontal",slidesPerView:i,spaceBetween:l,loop:s,breakpoints:{320:{slidesPerView:1},540:{slidesPerView:2},770:{slidesPerView:3},900:{slidesPerView:i}},wrapperClass:"products",slideClass:"product",grabCursor:!0,freeMode:!0,centeredSlides:!1,allowTouchMove:o,speed:500,parallax:!0,autoplay:!!a&&{delay:c},effect:"slide",pagination:{el:p,type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:u,prevEl:h},on:{snapGridLengthChange:function(){var e=this.slidesSizesGrid[0];this.slides.each((function(){this.style.maxWidth=e-10+"px",-1!==this.className.indexOf(" last ")&&this.classList.remove("last")}))}}})}},Product_Review:function(e){e.find(".stars").length||(e.find("#rating").before('<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a title = "One Star" class="star-1" href="javascript:void(0)">1</a>\t\t\t\t\t\t\t<a title = "Two Star" class="star-2" href="javascript:void(0)">2</a>\t\t\t\t\t\t\t<a title = "Three Star" class="star-3" href="javascript:void(0)">3</a>\t\t\t\t\t\t\t<a title = "Four Star" class="star-4" href="javascript:void(0)">4</a>\t\t\t\t\t\t\t<a title ="Five Star" class="star-5" href="javascript:void(0)">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>'),e.find("#rating").hide()),e.find(".stars:not(:first)").remove()},Single_Product_Images:function(t){"undefined"!=typeof e.fn.wc_product_gallery&&t.find(".woocommerce-product-gallery").wc_product_gallery(),t.find(".flex-viewport").css("height","auto"),t.on("click",".shopengine-product-image .shopengine-product-image-toggle",(function(e){e.preventDefault();let n=t.find(".woocommerce-product-gallery__trigger");n.length?n.click():t.find(".flex-active-slide a").click()})),e(".pswp__button.pswp__button--close, .pswp__container").on("click",(function(){setTimeout((()=>{e(".pswp--open").removeClass("pswp--open")}),0)}));let n=e("#shopengine-variable-onsale-badge");e(".variations_form").on("found_variation",(function(e,t){let o=t?.variation_id;if("undefined"!=typeof ShopEngineSaleVariations&&ShopEngineSaleVariations.hasOwnProperty(o)){let e=ShopEngineSaleVariations[o];e>0?(n.text(e+"% OFF"),n.show()):n.hide()}else n.hide()}))},Cart_Table:function(t){t.on("click",".minus-button, .plus-button",(function(n){n.preventDefault();let o=e(this),i=o.closest(".shopengine-cart-quantity").find("input.qty"),r=parseInt(i.val(),10);parseInt(i.attr("min"),10);var s=parseInt(i.attr("max"),10),a=parseInt(i.attr("step"),10);o.is(".minus-button")?r>1&&(r-=a):(s>=r+a||!s)&&(r+=a),i.val(r),t.find("[name=update_cart]").prop("disabled",!1)})),t.on("change",".shopengine-cart-quantity input.qty",(function(e){t.find("[name=update_cart]").prop("disabled",!1)})),t.on("click","[name=empty_cart]",(function(e){e.preventDefault(),t.find(".qty").val(0).trigger("change"),t.find("[name=update_cart]").prop("disabled",!1).trigger("click")})),t.on("click","button[name=update_cart]",(function(n){n.preventDefault();let o=t.find("form.shopengine-cart-form");if(a.is_blocked(o))return!1;a.block(o),a.block(e("div.cart_totals")),e("<input />").attr("type","hidden").attr("name","update_cart").attr("value","Update Cart").appendTo(o),e.ajax({type:o.attr("method"),url:o.attr("action"),data:o.serialize(),dataType:"html",success:function(e){a.update_wc_div(e)},complete:function(){a.unblock(o),a.unblock(e("div.cart_totals")),e.scroll_to_notices(e('[role="alert"]'))}})})),e(document).on("click",".woocommerce-cart-form .product-remove > a",(function(t){t.preventDefault(),e(document).on("wc_cart_emptied",(function(){location.reload()}))}))},Cart_Totals:function(e){var t=e.find("tr.shipping > td");t.length&&t.attr("colspan","2")},Filter_OrderBy:function(e){var t=e.find(".shopengine-filter");e.find(".orderby").on("change",(function(){t.trigger("submit")}))},Checkout_Coupon_Form:function(t){t.on("click","button.showcoupon",(function(){return e(".shopengine-checkout-coupon").slideToggle(400,(function(){e(".shopengine-checkout-coupon").find(":input:eq(0)").focus()})),!1})),t.on("click",'button[name="apply_coupon"]',(function(n){n.preventDefault();let o,i=t.find(".shopengine-checkout-coupon-form").find(".shopengine-checkout-coupon"),r=!!e(document.body).hasClass("shopengine-cart"),s=r?wc_cart_params:wc_checkout_params,c={security:r?wc_cart_params.apply_coupon_nonce:wc_checkout_params.apply_coupon_nonce,coupon_code:i.find('input[name="coupon_code"]').val()};return a.is_blocked(i)||(a.block(i),o=e(document.body).find(".shopengine-woocommerce-checkout .woocommerce-notices-wrapper, .shopengine-cart-table .woocommerce-notices-wrapper"),e.ajax({type:"POST",url:a.get_url(s,"apply_coupon"),data:c,success:function(t){e(".woocommerce-error, .woocommerce-message").remove(),o.after(t),i.slideUp(),a.unblock(e(i)),t&&(r?(a.block(e("div.cart_totals")),e.ajax({url:a.get_url(wc_cart_params,"get_cart_totals"),dataType:"html",success:function(e){a.update_cart_totals_div(e)},complete:function(){a.unblock(e("div.cart_totals")),e.scroll_to_notices(e('[role="alert"]'))}})):(e(document.body).trigger("applied_coupon_in_checkout",[c.coupon_code]),e(document.body).trigger("update_checkout",{update_shipping_method:!1})))},dataType:"html"})),!1}))},Checkout_Review_Order:function(e){},Checkout_Form_Shipping:function(e){var t=e.find("#ship-to-different-address-checkbox"),n=e.find(".shipping_address");(elementorFrontend.isWPPreviewMode()||elementorFrontend.isEditMode())&&(n.hide(),t.change((function(){this.checked?n.slideDown():n.hide()})))},ShippingMethod:function(t){let n=t.closest("form");n.find(".shopengine-checkout-review-order .woocommerce-shipping-totals").remove(),e(window).on("updated_checkout",(function(t,o){if(o&&o.fragments){n.find(".shopengine-checkout-review-order .woocommerce-shipping-totals").remove();let t=o.fragments[".woocommerce-checkout-review-order-table"],i=e(t).find(".woocommerce-shipping-totals");i.length&&e(document.body).find(".woocommerce-shipping-totals").replaceWith(i)}}))},Filter_ProductsPerPage:function(e){var t=e.find(".shopengine-products-per-page");t.on("change",(function(){t.trigger("submit")}))},Add_To_Cart:function(t){let n=t.find("form.cart");n.length&&n.on("click",".plus, .minus",(function(){let t=e(n).find('.qty:not([type="hidden"])'),o=n.hasClass("grouped_form")?e(this).parents("tr").find(".qty"):t,i=o.val()?parseFloat(o.val()):0,r=parseFloat(o.attr("max")),s=parseFloat(o.attr("min")),a=parseFloat(o.attr("step"));e(this).is(".plus")?r&&r<=i?o.val(r):o.val(i+a):s&&s>=i?o.val(s):i>0&&o.val(i-a)}))},Deal_Products:function(t){let n=t.find(".deal-products"),o=t.find(".deal-products__grap--line");const i=6e4,r=36e5,s=24*r;e.each(n,((t,n)=>(t=>{let n=e(t),o=JSON.parse(t.dataset.dealData),a=new Date(o.end_time.replace(/-/g,"/")).getTime(),c=n.find(".clock-days"),l=n.find(".clock-hou"),d=n.find(".clock-min"),p=n.find(".clock-sec"),u=setInterval((()=>{let e=(new Date).getTime(),n=a-e;c.text(Math.floor(n/s)),"yes"===o.show_days?l.text(Math.floor(n%s/r)):l.text(Math.floor(n/r)),d.text(Math.floor(n%r/i)),p.text(Math.floor(n%i/1e3)),n<0&&(clearInterval(u),t.css({display:"none"}))}),500)})(n)));const a=new ResizeObserver((t=>{e.each(t,((e,t)=>(e=>{const t=e.getContext("2d"),n=e.parentNode.getBoundingClientRect().width,o=e.height,i=JSON.parse(e.dataset.settings),r=i.total_sell/i.stock_qty*n;e.setAttribute("width",n+10),t.beginPath(),t.moveTo(2,o/2),t.lineTo(n,o/2),t.lineCap=i.bg_line_cap,t.lineWidth=i.bg_line_height,t.strokeStyle=i.bg_line_clr,t.stroke(),r>0&&(t.beginPath(),t.moveTo(2,o/2),t.lineTo(r,o/2),t.lineCap=i.prog_line_cap,t.lineWidth=i.prog_line_height,t.strokeStyle=i.prog_line_clr,t.stroke())})(t.target)))}));e.each(o,((e,t)=>{a.observe(t)}))},FilterableProductList:function(t){let n=t.find(".filter-nav-link"),o=t.find(".shopengine-filterable-product-wrap"),i=t.find(".filter-content"),r=JSON.parse(t.find(".shopengine-shopengine-filterable-product-list").attr("data-widget_settings"));t.on("click",".filter-nav-link",(function(t){t.preventDefault();let s=e(this),a=s.data("product-list"),c=s.data("filter-uid");n.removeClass("active"),s.addClass("active"),i.find(`.filter-${c}`).length?(i.find(".filtered-product-list").removeClass("active"),i.find(".filter-"+c).addClass("active")):jQuery.ajax({data:{products:a,settings:r},type:"GET",dataType:"html",url:shopEngineApiSettings.resturl+"shopengine-builder/v1/widgets_partials/filter_cat_products/",beforeSend:function(){o.addClass("is-loading")},success:function(e){i.find(".filtered-product-list").removeClass("active"),i.find(`.filter-${c}`).length||i.append('<div class="filter-content-row filtered-product-list active filter-'+c+'">'+e+"</div>")},complete:function(){o.removeClass("is-loading")}})}))},CheckoutFormLogin:function(e){let t=e.find(".woocommerce-form-login-toggle");if(0===t.length)return;t.remove();let n=e.find(".shopengine-checkout-form-login"),o=t[0].outerHTML+'<div class="shopengine-checkout-login-form" style="display:none">'+n.html()+"</div>";n.html(o),e.on("click",".showlogin",(function(t){t.preventDefault();let n=e.find(".shopengine-checkout-login-form");"none"===n.css("display")?n.slideDown():n.slideUp()})),e.on("click",".woocommerce-form-login__submit",(function(t){t.preventDefault(),t.target.disabled=!0;let n=e[0].querySelector('input[name="username"]'),o=e[0].querySelector('input[name="password"]'),i=e[0].querySelector('input[name="rememberme"]'),r=e[0].querySelector(".form-row-first"),s=e[0].querySelector(".form-row-last"),a=!0;if(0===n.value.length?(r.querySelector(".shopengine-checkout-login-required-msg")||(r.innerHTML+='<span class="shopengine-checkout-login-required-msg" style="color:red">User name or email field is required</span>'),a=!1):r.querySelector(".shopengine-checkout-login-required-msg")&&r.querySelector(".shopengine-checkout-login-required-msg").remove(),0===o.value.length?(s.querySelector(".shopengine-checkout-login-required-msg")||(s.innerHTML+='<span class="shopengine-checkout-login-required-msg" style="color:red">Password field is required</span>'),a=!1):s.querySelector(".shopengine-checkout-login-required-msg")&&s.querySelector(".shopengine-checkout-login-required-msg").remove(),!1===a)t.target.disabled=!1;else{e[0].querySelectorAll(".shopengine-checkout-login-required-msg").forEach((e=>{e.remove()})),jQuery.ajax({data:{user_login:n.value,user_password:o.value,rememberme:i.checked},type:"POST",dataType:"json",url:shopEngineApiSettings.resturl+"shopengine-builder/v1/widgets_partials/checkout_login/",success:function(){location.reload()},error:function(t){e.find(".woocommerce-NoticeGroup").remove();let n='<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error" role="alert"><ul><li>'+t.responseJSON.message+"</li></ul></div>";jQuery(".shopengine-checkout-form-login").prepend(n)},complete:function(){e.find(".woocommerce-form-login__submit").prop("disabled",!1)}})}}))}};e(window).on("elementor/frontend/init",c.init),e(document).on("click","button.my-xs-class",(function(t){t.preventDefault();let n=e("form.checkout_coupon");n.find("#coupon_code").val(jQuery(this).closest("div").find("#shopengine_code").val()),n.trigger("submit")}))}(jQuery,window.elementorFrontend);let shopengine_wrapper=document.querySelector(".shopengine-checkout-notice");if(shopengine_wrapper){const e=document.querySelector(".shopengine-woocommerce-checkout-form");if(e){const t={childList:!0,subtree:!0};new MutationObserver((function(){let e=document.querySelector(".woocommerce-NoticeGroup");e&&""!==e.innerHTML&&(shopengine_wrapper.innerHTML=e.innerHTML,e.innerHTML="")})).observe(e,t)}}