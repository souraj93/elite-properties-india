var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;

var BASE_URL = 'https://www.liyaans.com/';
var BASE_URL_WS = 'https://www.liyaans.com';
var CUR_PAGE_URL = window.location.href;
var pgbar_id = 'progressBar';
var status_id = 'status';
var btnOrder = 'submit_addEdit';
var frmName = 'frmAddEdit';
let filteredProducts = [];
let searchedProducts = [];

// const verifyPhone = (e) => {
//   if (isNaN(e.value)) {
//     e.value = e.value.replace(/[^\d]/g,'');
//   } 
// };

// const verifyEmail = (e) => {
//   const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   const errField = document.getElementById("formErrorMsg");
//   if (!emailRegex.test(e.value.trim())) {
//     errField.innerHTML = "Invalid Email";
//   } else {
//     errField.innerHTML = "";
//   }
// };

const submitForm = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdWfaEEN3-kKDmSrdgkOBmW1_ZvtOQiwH3j4KWTZmRftn5ueydvCbSvQN3eY3qcPrz/exec';
  let form = null;
  if (window.innerWidth < 768) {
    form = document.getElementById("contactForm_mobile");
  } else {
    form = document.getElementById("contactForm");
  }
  const formData = new FormData(form);
  // const elements = form.elements;
  // console.log("xxxxxx ", elements)
  // // let errorMsg = "";
  // for (let i = 0; i < elements.length; i++) {
  //   console.log("elements ", elements[i])
  //   // if (elements.type !== "button" && !elements[i].value.trim()) {
  //   //   errorMsg = `${elements[i].id} is required`;
  //   //   break;
  //   // }
  // }
  // console.log("errorMsg ",errorMsg)

  // if (!errorMsg) {
  //   const emailField = document.getElementById("Email");
  //   verifyEmail({
  //     value: emailField.value
  //   });
  // } else {
  //   const errField = document.getElementById("formErrorMsg");
  //   if (errorMsg !== " is required") {
  //     errField.innerHTML = errorMsg;
  //   }
    
  // }

// console.log("formData ", formData)

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => console.log('Success!'))
    .catch(error => console.log('Error!', error.message));
  form.reset();
    
}

const clickContactUsFromMenu = () => {
  const offcanvasBackdrop = document.getElementsByClassName("offcanvas-backdrop");
  const offCanvas = document.getElementsByClassName("offcanvas");
  const body = document.body;
  body.style.overflow = "auto";
  body.style.paddingRight = 0;
  offcanvasBackdrop && offcanvasBackdrop[0] && offcanvasBackdrop[0].remove();
  offCanvas && offCanvas[0] && offCanvas[0].classList.remove("show");
  window.scrollTo(0, document.body.scrollHeight);
};

const filterProducts = (event) => {
  const filterIds = ["buy_filter", "newProjects_filter"];
  event.target.style.backgroundColor = "#363062";
  event.target.style.color = "#fff";
  let otherFilter;
  let otherProducts;

  if (searchedProducts.length) {
    console.log("searchedProducts-- ", searchedProducts)
    for (let i = 0; i < filterIds.length; i++) {
      if (filterIds[i] !== event.target.id) {
        otherFilter = document.getElementById(filterIds[i]);
        otherFilter.style.backgroundColor = "#fff";
        otherFilter.style.color = "#363062";
      }
    }
    displayProducts(searchedProducts, event.target.id);
  } else {
    for (let i = 0; i < filterIds.length; i++) {
      if (filterIds[i] !== event.target.id) {
        otherFilter = document.getElementById(filterIds[i]);
        otherFilter.style.backgroundColor = "#fff";
        otherFilter.style.color = "#363062";
  
        otherProducts = document.getElementsByClassName(filterIds[i]);
        console.log("otherProducts ", otherProducts);
        if (otherProducts && otherProducts.length) {
          for (let i = 0; i < otherProducts.length; i++) {
            otherProducts[i].style.display = "none";
          }
        }
      }
    }
    filteredProducts = document.getElementsByClassName(event.target.id);
    console.log("filteredProducts ", filteredProducts);
    displayProducts(filteredProducts, event.target.id);
    
  }

  
};

const submitRequest = () => {
  
  
};

const displayProducts = (products, filterId) => {
  console.log("products ", products);
  if (products && products.length) {
    searchedProducts = [];
    for (let i = 0; i < products.length; i++) {
      products[i].style.display = "none";
      const allClassString = Array.from(products[i].classList).join(' ');
      console.log("allClassString ", allClassString, products)
      if (((filterId && allClassString.indexOf(filterId) > -1) || !filterId) &&
       allClassString.indexOf(`search_${getSearchedText()}`) > -1) {
        searchedProducts.push(products[i]);
      }
    }
    console.log("searchedProducts ", searchedProducts)
    if (!searchedProducts.length) {
      filteredProducts = [];
    }
    if (searchedProducts && searchedProducts.length) {

      for (let i = 0; i < searchedProducts.length; i++) {
        searchedProducts[i].style.display = "block";
      }
    }
  }
};

const getSearchedText = () => {
  const searchBox = document.getElementById("project_search");
  let searchedText = searchBox.value;
  searchedText = searchedText && searchedText.trim();
  searchedText = searchedText.replaceAll(" ", "_").toLowerCase();

  return searchedText;
};

const searchProducts = () => {
  
  console.log("filteredProducts-- ", filteredProducts)
  let allProducts = filteredProducts.length ? filteredProducts : document.getElementsByClassName("premium_item");
  
  displayProducts(allProducts);
  // if (allProducts && allProducts.length) {
  //   for (let i = 0; i < allProducts.length; i++) {
  //     allProducts[i].style.display = "none";
  //     const allClassString = Array.from(allProducts[i].classList).join(' ');
  //     if (allClassString.indexOf(`search_${searchedText}`) > -1) {
  //       searchedProducts.push(allProducts[i]);
  //     }
  //   }
  //   console.log("searchedProducts ", searchedProducts)
  //   if (searchedProducts && searchedProducts.length) {

  //     for (let i = 0; i < searchedProducts.length; i++) {
  //       searchedProducts[i].style.display = "block";
  //     }
  //   }
  // }
};

function uploadFile(pgbar, status, file_field, upload_url, upload_dir, upload_type, ret_nm, ret_id, addl_params) {
  pgbar_id = pgbar; status_id = status;
  $("#" + pgbar_id).css({ "display": "block" });
  $("#" + status_id).removeClass('note_gr_text').removeClass('note_text');
  var file = document.getElementById(file_field).files[0];
  var formdata = new FormData();

  formdata.append("upload_file", file);
  formdata.append("upload_dir", upload_dir);
  formdata.append("upload_type", upload_type);
  formdata.append("ret_filename", ret_nm);
  formdata.append("ret_fileid", ret_id);
  if (addl_params) {
    $.each(addl_params, function (index, value) {
      formdata.append(index, value);
    });
  }
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false);
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);
  ajax.open("POST", BASE_URL + upload_url);
  ajax.send(formdata);
}
function progressHandler(event) {
  var percent = (event.loaded / event.total) * 100;
  $("#" + pgbar_id).val(Math.round(percent));
  $("#" + status_id).html(Math.round(percent) + "% uploaded... please wait");
}
function completeHandler(event) {
  $("#" + status_id).html(event.target.responseText);
  $("#" + pgbar_id).val(100);
  var res_txt = event.target.responseText;
  var err_f = res_txt.substring(0, res_txt.indexOf(':'));
  if (err_f == 'ERROR') $("#" + status_id).addClass('note_text');
  else $("#" + status_id).addClass('note_gr_text');
}
function errorHandler(event) {
  $("#" + status_id).html("Upload Failed");
  $("#" + status_id).addClass('note_text');
}
function abortHandler(event) {
  $("#" + status_id).html("Upload Aborted");
  $("#" + status_id).addClass('note_text');
}
function openPopup(popup_url) {
  window.open(popup_url);
}
function checkPermission(action) {
  var ret;
  $.ajax({
    type: 'POST',
    url: BASE_URL + 'ajax/permissionCheck',
    data: { 'action': action },
    dataType: "json",
    timeout: 10000,
    async: false,
    cache: false,
    context: this,
    success: function (resp) {
      if ($.trim(resp) !== '') {
        ret = false;
        $("#bulk_action").val('');
        $(".check_rec:checked").prop('checked', false);
        $("div#securityModal").find("div.loader_wrap").hide();
        $("div#securityModal").find("div.modal-body").html(resp.security);
        $("#securityModal").modal();
      } else ret = true;
    }
  });
  return ret;
}

function convertSpacesToDash(searchPhrase) {
  // Use a regular expression to replace spaces with '-'
  return searchPhrase.trim().replace(/\s+/g, '-');
  //str.trim().replace(/ /g, '-');
}

var _resetUsrLog = function () {
  var uts = parseInt(new Date().getTime().toString().substring(0, 10));
  $.ajax({
    type: 'GET',
    url: BASE_URL + 'auction/reset-time-log/?t=' + uts
  });
};
$(document).ready(function () {
  $("form, input").attr("autocomplete", "off");

  if ($("#information_text").length > 0 && $("#information_text").html().search(/\S/) != -1) {
    $('.information').liMarquee({
      direction: 'left',
      circular: true
    });
  }

  if ($(".tiny-box").length) {
    tinymce.init({
      selector: '.tiny-box',
      height: 300,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor textcolor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
      content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tiny.cloud/css/codepen.min.css'
      ]
    });
  }

  if ($(document).find('[data-toggle="tooltip"]').length) $('[data-toggle="tooltip"]').tooltip();

  var _ajaxLoginCheck = function () {
    $.ajax({
      type: 'GET',
      url: BASE_URL + 'ajax/auto-refresh-admin',
      success: function (resp) {
        if ($.trim(resp) !== '') {
          if (resp == 'home') window.location.href = BASE_URL;
          else if (resp == 'logout') window.location.href = BASE_URL + 'logout';
        }
      }
    });
  };

  var ea_options = {
    url: BASE_URL + "public/assets/js/search.json",
    getValue: "name", // Field to display in autocomplete suggestions
    minCharNumber: 2,
    categories: [{
      listLocation: 'locations',
      header: 'Locations'
    }, {
      listLocation: 'developers',
      header: 'Developers'
    }, {
      listLocation: 'projects',
      header: 'Projects'
    }],
    list: {
      match: {
        enabled: true
      },
      maxNumberOfElements: 20, // Maximum number of suggestions to display
      showAnimation: {
        type: "slide"
      },
      hideAnimation: {
        type: "slide"
      },
      // Define categories
      onChooseEvent: function () {
        let selectedItemCat = $("#searchBox").getSelectedItemData().category;
        let selectedItemUrl = $("#searchBox").getSelectedItemData().url;
        window.location.href = BASE_URL + selectedItemUrl;
      }
    },
    theme: 'plate-dark'
  };
  $('#searchBox').easyAutocomplete(ea_options);

  $("#searchBox").keypress(function (e) {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    let srch_err = 0;
    if (keycode == 13) {
      e.preventDefault();
      if ($(this).val().search(/\S/) == -1) {
        $("#searchBox").after('<span class="valid-msg">Please enter search keyword.</span>');
        srch_err++;
      } else {
        let search_phrase = convertSpacesToDash($(this).val());
        window.location.replace(BASE_URL + 'projects/all/' + search_phrase);
        return true;
      }
      if (parseInt(srch_err) > 0) {
        setTimeout(function () {
          $("span.valid-msg").fadeOut(8000, function () {
            $("span.valid-msg").remove();
          });
        }, 2000);
        return false;
      }
    }
  });

  $(document).on('paste', '#searchBox', function (e) {
    setTimeout(function () {
      let search_phrase = convertSpacesToDash($("#searchBox").val());
      window.location.replace(BASE_URL + 'projects/all/' + search_phrase);
    }, 1000);
  });

  $(document).on('click', '#btnAddlSearch', function (e) {
    let prop_type = $("#property_group").val();
    let curr_url = CUR_PAGE_URL;
    let curr_url_arr = curr_url.replace(BASE_URL, '').split('/');
    if (prop_type.search(/\S/) != -1) {
      curr_url_arr[1] = prop_type;
      let new_url = curr_url_arr.join('/');
      window.location.replace(BASE_URL + new_url);
    }
  });

  $(document).on('click', '#subscribeNewsletter', function () {
    if (!email_regex.test($("#newsletterEmail").val())) {
      $("#newsletterEmail").val('').focus();
      $("#newsletterEmail").after('<span class="valid-msg">Valid email please.</span>');
    } else {
      $.ajax({
        type: 'POST',
        url: BASE_URL + 'leads/subscribe-newsletter',
        data: { 'newsletter_email': $("#newsletterEmail").val(), 'call_type': 'ajax' },
        dataType: "json",
        success: function (resp) {
          var respObj = resp;
          $("#newsletterEmail").val('');
          if (respObj.code == 'failure') $("#newsletterEmail").after('<span class="valid-msg">' + respObj.msg + '</span>');
          if (respObj.code == 'success') $("#newsletterEmail").after('<span class="success-msg">' + respObj.msg + '</span>');
        }
      });
    }
    setTimeout(function () {
      $("span.valid-msg").fadeOut(8000, function () {
        $("span.valid-msg").remove();
      });
      $("span.success-msg").fadeOut(8000, function () {
        $("span.success-msg").remove();
      });
    }, 2000);
  });

  $(document).on('keypress', '#newsletterEmail', function (e) {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13) {
      if (!email_regex.test($(this).val())) {
        $(this).val('').focus();
        $(this).after('<span class="valid-msg">Valid email please.</span>');
      } else {
        $.ajax({
          type: 'POST',
          url: BASE_URL + 'leads/subscribe-newsletter',
          data: { 'newsletter_email': $("#newsletterEmail").val(), 'call_type': 'ajax' },
          dataType: "json",
          success: function (resp) {
            var respObj = resp;
            $("#newsletterEmail").val('');
            if (respObj.code == 'failure') $("#newsletterEmail").after('<span class="valid-msg">' + respObj.msg + '</span>');
            if (respObj.code == 'success') $("#newsletterEmail").after('<span class="success-msg">' + respObj.msg + '</span>');
          }
        });
      }
      setTimeout(function () {
        $("span.valid-msg").fadeOut(8000, function () {
          $("span.valid-msg").remove();
        });
        $("span.success-msg").fadeOut(8000, function () {
          $("span.success-msg").remove();
        });
      }, 2000);
    }
  });

  $(document).on('keypress', '.numeric', function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode >= 48 && keycode <= 57) return true;
    else return false;
  });

  $(document).on('keypress', '.double', function (evt) {
    var self = $(this);
    self.val(self.val().replace(/[^0-9\.]/g, ''));
    if ((evt.which != 46 || self.val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) {
      evt.preventDefault();
    }
  });

  $(document).on('change', 'input[data-var!=""].calc', function () {
    var $this = $(this).parents('div.form-body:visible:first').find('input[data-formula*="' + $(this).attr('data-var') + '"]');
    var formula = $this.attr('data-formula'); var operands = formula.match(/\w+/g); var Arr = [1, 1];
    if (operands.length) {
      var qty = $('input[data-var="qty"]').val();
      var unit = $('input[data-var="unit"]').val();
      if (unit != null && parseInt(unit) > 0) {
        $this.val((qty / unit).toFixed(2));
      } else {
        $this.val(1.00);
      }
    }
  });

  $(document).on('change', 'select#li_auto_extension', function () {
    if ($(this).val()) {
      if ($(this).val() === 'Y') $(this).parents('div.form-body:visible:first').find('input#li_max_noof_extension,input#li_extension_limit,input#li_extension_by').addClass('validate-fields').prop('readonly', false);
      else {
        $(this).parents('div.form-body:visible:first').find('input#li_max_noof_extension,input#li_extension_limit,input#li_extension_by').removeClass('validate-fields').prop('readonly', true);
        $(this).parents('div.form-body:visible:first').find('input#li_max_noof_extension').val('0');
        $(this).parents('div.form-body:visible:first').find('input#li_extension_limit,input#li_extension_by').val('');
      }
    }
  });

  $("#backLink").click(function (event) {
    event.preventDefault();
    history.back(1);
  });

  $(".menu_close_btn").click(function () {
    $(".side_bar_nav").toggleClass('nav-closed');
    $(".right_wrapper").toggleClass('right-full');
    $(this).children('i').toggleClass('fa-arrow-right').toggleClass('fa-navicon');
  });

  $(".side_bar_nav ul li").mouseover(function () {
    $(this).children('a:first').addClass('active');
    $(this).children('ul').addClass('l-100');
  });

  $(".side_bar_nav ul li").mouseout(function () {
    $(".side_bar_nav ul li a").removeClass('active');
    $(".side_bar_nav ul li ul").removeClass('l-100');
  });

  $(document).on('focus', '.search-date-params', function () {
    $(".search-date-params").datepicker({
      dateFormat: "yy-mm-dd",
      onSelect: function (selected, evnt) {
        $("#cur_page").val(1);
        $("div.page_content_wrap").children("div.loader_wrap").show();
        _callListingAjax();
      }
    });
  });

  $(document).on('focus', '.form-date-params', function () {
    $(this).datepicker({
      dateFormat: "dd/mm/yy",
      beforeShowDay: function (date) {
        var day = date.getDay();
        return [day != 0, ''];
      }
    });
  });

  var _getRandomIndex = function (maxnum) {
    return Math.floor(Math.random() * Math.floor(maxnum));
  };

  var _autoRefreshFlashColor = function () {
    var colorArr = ['blue', '#1f5703', '#ff0000'];
    var indx = _getRandomIndex(3);
    var text_color = colorArr[indx];
    $("span.flash_thank_msg").css({ 'color': text_color });
    $("span.flash_thank_msg").find('span').css({ 'color': text_color });
  };

  $(document).on('click', "#add_to_refresh", function () {
    if ($(".action-select:checked").length > 0) {
      _bid_action = 'add_to_refresh';
      _bidAction();
    } else {
      $("#frmBiddingTable").after('<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>Sorry, please select at least one record.</div>');
      $(".bidding_table").find("div.alert").delay(3000).fadeOut(15000, function () {
        $(".bidding_table").find("div.alert").remove();
      });
    }
    return false;
  });

  $(document).on('change', "#filter_company", function () {
    if ($(this).val().search(/\S/) != -1) {
      _bid_action = 'refresh';
      _bidAction();
    }
  });

  $(document).on('change', "#filter_auction", function () {
    if ($(this).val().search(/\S/) != -1) {
      _bid_action = 'refresh';
      _bidAction();
    }
  });

  $(".view-pass").click(function () {
    if ($("#login_upass").length) {
      var curr_type = $("#login_upass").attr('type');
      if (curr_type == 'password') {
        $("#login_upass").attr('type', 'text');
        $(this).addClass('fa-eye-slash').removeClass('fa-eye');
        $(this).attr('title', 'Hide Password');
      } else {
        $("#login_upass").attr('type', 'password');
        $(this).addClass('fa-eye').removeClass('fa-eye-slash');
        $(this).attr('title', 'Show Password');
      }
    }
    if ($("#password").length) {
      var curr_type = $("#password").attr('type');
      if (curr_type == 'password') {
        $("#password").attr('type', 'text');
        $(this).addClass('fa-eye-slash').removeClass('fa-eye');
        $(this).attr('title', 'Hide Password');
      } else {
        $("#password").attr('type', 'password');
        $(this).addClass('fa-eye').removeClass('fa-eye-slash');
        $(this).attr('title', 'Show Password');
      }
    }
  });

  $(".view-pass-conf").click(function () {
    if ($("#confpassword").length) {
      var curr_type = $("#confpassword").attr('type');
      if (curr_type == 'password') {
        $("#confpassword").attr('type', 'text');
        $(this).addClass('fa-eye-slash').removeClass('fa-eye');
        $(this).attr('title', 'Hide Password');
      } else {
        $("#confpassword").attr('type', 'password');
        $(this).addClass('fa-eye').removeClass('fa-eye-slash');
        $(this).attr('title', 'Show Password');
      }
    }
  });

  $(document).on('click', ".modal-preview", function () {
    var target = $(this).attr('data-bs-target');
    var rec_type = $(this).attr('data-rec-type');
    var modal_title = $(this).attr('data-modal-title');
    var rec_id = $(this).attr('data-rec-id');

    $(target + "Title").text(modal_title);
    $.ajax({
      type: 'POST',
      url: BASE_URL + 'ajax/get-preview-content',
      data: { 'rec_id': rec_id, 'rec_type': rec_type },
      success: function (resp) {
        if (resp.search(/\S/) != -1) {
          $("div" + target).find("div.modal-body").html(resp);
          return false;
        }
      }
    });
  });

  $("#btnForgotPass").click(function () {
    $("span.login_title").html('Forgot Password?');
    $("#frmAdminLogin").slideUp('medium');
    $("#frmForgotPass").slideDown('medium');
  });

  $("#btnCancelForgot").click(function () {
    $("span.login_title").html('Log in to Admin Panel');
    $("#frmForgotPass").slideUp('medium');
    $("#frmAdminLogin").slideDown('medium');
  });

  $(document).on('click', '#btnAccountLogin', function () {
    $("span.valid-msg").remove();
    if ($("#login_uname").val().search(/\S/) == -1) {
      $("#login_uname").focus();
      $("#login_uname").after('<span class="valid-msg">Please enter your account username / email.</span>');
      return false;
    } else if ($("#login_upass").val().search(/\S/) == -1) {
      $("#login_upass").focus();
      $("#login_upass").after('<span class="valid-msg">Please enter your account password.</span>');
      return false;
    } else {
      $("#login_upass").attr('type', 'password');
      $(".view-pass").addClass('fa-eye').removeClass('fa-eye-slash');
      $(".view-pass").attr('title', 'Show Password');
      var hashPass = CryptoJS.MD5($("#login_upass").val());
      $("#login_upass").val(hashPass);
      $("div.login_wrap").children("div.loader_wrap").show();
      $.ajax({
        type: 'POST',
        url: BASE_URL + 'login/index',
        data: { 'frmData': $("#frmAdminLogin .form-control").serializeArray() },
        dataType: "json",
        success: function (auth) {
          if (auth != '') {
            var authObj = auth;
            if (authObj.status == 'error') {
              $("div.login_wrap").children("div.loader_wrap").hide();
              $("#login_uname,#login_upass").val('');
              $("#login_uname").focus();
              $("div.error_msg").html(authObj.message).slideDown('medium').fadeOut(5000, function () {
                $("div.error_msg").html('');
              });
            } else if (authObj.status == 'success') {
              $(location).attr('href', BASE_URL + 'dashboard');
              return true;
            }
          }
        }
      });
    }
  });

  $(document).on('click', '#btnForgotSubmit', function () {
    $("span.valid-msg").remove();
    if (!email_regex.test($("#login_uemail").val())) {
      $("#login_uemail").focus();
      $("#login_uemail").after('<span class="valid-msg">Please enter account email address.</span>');
      return false;
    } else {
      $.ajax({
        type: 'POST',
        dataType: "json",
        url: BASE_URL + 'login/index',
        data: { 'frmData': $("#frmForgotPass .form-control").serializeArray(), 'call_type': 'forget_pass_ajax' },
        cache: false,
        beforeSend: function () {
          $("div.login_wrap").children("div.loader_wrap").show();
        },
        success: function (auth) {
          $("div.login_wrap").children("div.loader_wrap").hide();
          if (auth != '') {
            var authObj = auth;
            if (authObj.status == 'error') {
              $("#login_uemail").focus();
              $("div.error_msg").html(authObj.message).slideDown('medium').fadeOut(5000, function () {
                $("div.error_msg").html('');
              });
            } else if (authObj.status == 'success') {
              $("div.success_msg").html(authObj.message).slideDown('medium').fadeOut(5000, function () {
                $("#login_uemail").val('');
                $("div.success_msg").html('');
                $("#btnCancelForgot").click();
              });
            }
          }
        }
      });
    }
  });

  $(document).on('keypress', '#frmForgotPass #login_uemail', function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13) {
      e.preventDefault();
      $("#btnForgotSubmit").trigger('click');
    }
    else {
      if ($(this).val().search(/\S/) != -1 && $(this).parent('div.form-group').children('span.valid-msg').length > 0) {
        $("span.valid-msg").remove();
      }
    }
  });

  $("#frmAdminLogin .form-control").keyup(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13) $("#btnAccountLogin").trigger('click');
    else {
      if ($(this).val().search(/\S/) != -1 && $(this).parent('div.form-group').children('span.valid-msg').length > 0) {
        $("span.valid-msg").remove();
      }
    }
  });

  $(document).on('click', '#submit_brochure_lead', function () {
    $("span.valid-msg").remove();
    let err_cnt = 0;
    if ($("#broch_fullname").val().search(/\S/) == -1) {
      $("#broch_fullname").focus();
      $("#broch_fullname").after('<span class="valid-msg">Please enter your Full Name.</span>');
      err_cnt++;
    }
    if ($("#broch_email").val().search(/\S/) == -1 || !email_regex.test($("#broch_email").val())) {
      $("#broch_email").focus();
      $("#broch_email").after('<span class="valid-msg">Please enter proper Email.</span>');
      err_cnt++;
    }
    if ($("#broch_phone").val().search(/\S/) == -1) {
      $("#broch_phone").focus();
      $("#broch_phone").after('<span class="valid-msg">Please enter your Mobile Number.</span>');
      err_cnt++;
    }

    if (err_cnt > 0) return false;
    else {
      $.ajax({
        type: 'POST',
        url: BASE_URL + 'leads/index',
        data: { "leads[fullname]": $("#broch_fullname").val(), "leads[email]": $("#broch_email").val(), "leads[phone]": $("#broch_phone").val(), "leads[from_page]": $("#broch_from_page").val(), "leads[type]": $("#broch_type").val(), "leads[lead_type]": $("#broch_lead_type").val(), "recaptcha_token": $("#broch_recaptcha_token").val(), "call_type": 'ajax' },
        success: function (resp) {
          if (resp.search(/\S/) != -1) {
            if (resp == 'success') {
              let broch_url = $(".open-brochure-form").attr('data-brochure-pdf');
              $(".open-brochure-form").attr('href', broch_url);
              $(".open-brochure-form").removeAttr('data-bs-toggle');
              $(".open-brochure-form").removeAttr('data-bs-target');
              $(".open-brochure-form").removeAttr('data-brochure-pdf');

              $("#broch_fullname,#broch_email,#broch_phone").val('');
              $("#leadFormModal").modal('hide');

              window.location.href = broch_url;
            }
          }
        }
      });
    }
  });

  var _callListingAjax = function () {
    $.ajax({
      type: 'POST',
      url: $("#frmListing").attr('action'),
      data: { 'search_params': $("#frmListing .search-params").serializeArray(), 'per_page': $("#per_page").val(), 'cur_page': $("#cur_page").val(), 'call_type': 'ajax' },
      success: function (resp) {
        if (resp.search(/\S/) != -1) {
          $("div.page_content_wrap").children("div.loader_wrap").hide();
          $("div.page_content_wrap").html(resp);
          $('html, body').animate({
            scrollTop: $("div.page_content_wrap").offset().top - 120
            //scrollTop: 0
          }, 500);
          return false;
        }
      }
    });
  };

  $(document).on('change', 'select.search-params,select.page-params', function () {
    $("#cur_page").val(1);
    $("div.page_content_wrap").children("div.loader_wrap").show();
    _callListingAjax();
  });

  $(document).on('keyup keypress', 'input.search-params', function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13) {
      e.preventDefault();
      $("div.page_content_wrap").children("div.loader_wrap").show();
      _callListingAjax();
      return false;
    }
  });

  $(document).on('click', '#filter', function () {
    $('.search-params, .page-params').trigger('change');
  });

  $(document).on('click', '#reset_filter', function () {
    $(".search-params").val('');
    $("#per_page option:selected").prop('selected', false);
    $("#per_page option:first").prop('selected', 'selected');
    $("#cur_page").val(1);
    $("div.page_content_wrap").children("div.loader_wrap").show();
    _callListingAjax();
  });

  $(document).on('click', '.paging-prv', function () {
    if (!$(this).hasClass('disabled')) {
      $("#cur_page").val(parseInt($("#cur_page").val()) - 1);
      $("div.page_content_wrap").children("div.loader_wrap").show();
      _callListingAjax();
    }
  });

  $(document).on('click', '.paging-nxt', function () {
    if (!$(this).hasClass('disabled')) {
      $("#cur_page").val(parseInt($("#cur_page").val()) + 1);
      $("div.page_content_wrap").children("div.loader_wrap").show();
      _callListingAjax();
    }
  });

  $(document).on('click', '.paging-num', function () {
    if (!$(this).hasClass('disabled')) {
      $("#cur_page").val(parseInt($(this).text()));
      $("div.page_content_wrap").children("div.loader_wrap").show();
      _callListingAjax();
    }
  });

  $(document).on('click', '#check_all_rec', function () {
    if ($("#check_all_rec").prop('checked')) {
      $(".check_rec").attr('checked', true);
    } else {
      $(".check_rec").attr('checked', false);
    }
  });

  $(document).on('click', '.del_record', function () {
    $(this).parents('tr').find('input.check_rec').prop('checked', true);
    $("#bulk_action").val('delete');
    $("#bulk_action").trigger('change');
  });

  $(document).on('change', '#bulk_action', function () {
    if ($("#bulk_action").val().search(/\S/) != -1) {
      var action_name = $("#bulk_action").val(); var lbl = $("#bulk_action").find('option:selected').text();
      var confirm_dialogue = "Are you sure to " + lbl + " the selected record(s)?";
      if (action_name.toLowerCase().indexOf('export') === -1 && (typeof check === 'undefined' || check)) {
        $("#securityModalTitle").text("Security Check");
        $("div#securityModal").find("div.loader_wrap").show();
        var act = (action_name === 'delete') ? 'delete' : 'edit';
        var resp = checkPermission(act); check = false;
        if (resp) $(this).change();
        else check = undefined;
      } else {
        check = undefined;
        if ($(".check_rec:checked").length == 0 && $.inArray(action_name, ['export', 'import', 'decline']) == -1) {
          alert("Please select atleast one record to continue.");
          $("#bulk_action").val('');
          return false;
        } else {
          if (action_name === 'decline' && CUR_PAGE_URL.indexOf('revauctiondata/techno-commercial-bids') != -1) {
            $("div.page_content_wrap").children("div.loader_wrap").show();
            let check_list = $('.check_rec:checked').map(function () { return this.value; }).get().join(',');
            $.ajax({
              type: 'POST',
              url: BASE_URL + 'ajax/bid-decline-form',
              data: { 'bulk_action': action_name, 'check_list': check_list },
              success: function (resp) {
                $("#commonModal").find('div.modal-body').html(resp);
                $("#commonModal").modal();
              }
            });
          } else if (action_name === 'invite') {
            $("div.page_content_wrap").children("div.loader_wrap").show();
            let check_list = $('.check_rec:checked').map(function () { return this.value; }).get().join(',');
            $.ajax({
              type: 'POST',
              url: BASE_URL + 'ajax/get-tender-vendors',
              data: { 'bulk_action': action_name, 'check_list': check_list },
              success: function (resp) {
                $("#commonModal").find('div.modal-body').html(resp);
                $("#commonModal").modal();
              }
            });
          } else if (action_name === 'export') {
            $("#action_mode").val('bulk');
            $("#frmListing").submit();
            $("#bulk_action").val('');
            return true;
          } else if (action_name === 'import') {
            $("#bulk_action").val('');
            $("div#importLotModal").find('select').val('');
            $("div#importLotModal").find('select[name!="compID"] option[value!=""]').remove();
            $("div#importLotModal").modal();
            return true;
          } else {
            if (confirm(confirm_dialogue)) {
              if ($(".main_check_rec:checked").length > 0) {
                if (confirm("Deleting Main Menu will delete all menus under it. Are you sure?")) {
                  $("div.page_content_wrap").children("div.loader_wrap").show();
                  $("#action_mode").val('bulk');
                  $("#frmListing").submit();
                }
              } else {
                $("div.page_content_wrap").children("div.loader_wrap").show();
                $("#action_mode").val('bulk');
                $("#frmListing").submit();
              }
            } else {
              $(".check_rec:checked").prop('checked', false);
              $("#bulk_action").val('');
              return false;
            }
          }
        }
      }
    }
  });

  $(document).on('click', '.change-user-status', function () {
    var elem_id = $(this).attr('id');
    var func = $(this).attr('data-action');
    var user_id = $(this).attr('data-user-id');
    var user_type = $(this).attr('data-user-type');

    if (func.search(/\S/) != -1 && user_id.search(/\S/) != -1 && user_type.search(/\S/) != -1) {
      var confirm_dialogue = "Are you sure to " + func + " the user?";
      if (confirm(confirm_dialogue)) {
        $("div.page_content_wrap").children("div.loader_wrap").show();
        $.ajax({
          type: 'POST',
          url: BASE_URL + 'ajax/change-user-status',
          data: { 'func': func, 'user_id': user_id, 'user_type': user_type },
          success: function (resp) {
            if ($.trim(resp) == 'success') {
              if (func == 'activate') {
                $("#" + elem_id).children('i').removeClass('fa-lock').addClass('fa-unlock');
                $("#" + elem_id).children('i').attr('title', 'Deactivate User');
                $("#" + elem_id).attr('data-action', 'deactivate');
              } else if (func == 'deactivate') {
                $("#" + elem_id).children('i').removeClass('fa-unlock').addClass('fa-lock');
                $("#" + elem_id).children('i').attr('title', 'Activate User');
                $("#" + elem_id).attr('data-action', 'activate');
              }
            }
            $("div.page_content_wrap").children("div.loader_wrap").hide();
          }
        });
      }
    }
    return false;
  });

  $(document).on('click', '.restore-tables', function () {
    var data_id = $(this).attr('data-id');
    if (data_id.search(/\S/) != -1) {
      var confirm_dialogue = "Are you sure to restore this file?";
      if (confirm(confirm_dialogue)) {
        $("div.page_content_wrap").children("div.loader_wrap").show();
        $.ajax({
          type: 'POST',
          url: BASE_URL + 'admincontrol/restoreTBL',
          data: { 'id': data_id },
          success: function (resp) {
            location.reload();
          }
        });
      }
    }
  });

  $(document).on('click', "[id^='submit_addEdit']", function () {
    if ($(".tiny-box").length) tinymce.triggerSave();
    var parent_frm = $(this).parents('form').attr('id');
    var err_cnt = 0;
    var err_first = '';
    var conf_submit = ($(this).attr('data-submit') !== 'undefined' && $(this).attr('data-submit') == 'confirm') ? true : false;
    var butt_txt = $(this).text();
    $("span.valid-msg").remove();
    $("span.chksucc-msg").remove();
    //console.log($("#"+parent_frm+" .validate-fields").length);
    if ($("#" + parent_frm + " .validate-fields").length > 0) {
      $("#" + parent_frm + " .validate-fields").each(function () {
        var fld_type = $(this).attr('data-field');
        var pass_match_fld = $(this).attr('data-val-match');
        var fld_lbl = ($(this).parents('div.form-group').children('label.control-label').length) ? $(this).parents('div.form-group').children('label.control-label').html() : $(this).attr('data-title');
        //if(fld_lbl=='undefined') fld_lbl = $(this).attr('data-title');

        if (fld_type == 'email' && !email_regex.test($(this).val())) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Please enter ' + fld_lbl + '.</span>');
        } else if (fld_type == 'text' && $(this).val().search(/\S/) == -1) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Please enter ' + fld_lbl + '.</span>');
        } else if (fld_type == 'select' && $(this).val().search(/\S/) == -1) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Please select ' + fld_lbl + '.</span>');
        } else if (fld_type == 'multiselect' && $(this).attr('title') == 'None selected') {
          err_cnt++;
          $(this).parents('span.multiselect-native-select').after('<span class="valid-msg">Choose apparel sizes.</span>');
        } else if (fld_type == 'password' && $(this).val().search(/\S/) == -1) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Please enter ' + fld_lbl + '.</span>');
        } else if (fld_type == 'password' && $(this).val().search(/\S/) == 0 && !password_regex.test($(this).val())) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Sorry, your password must contain at least one capital letter, one small letter, one number, one special character and minimum eight characters long.</span>');
        } else if (fld_type == 'confpassword' && pass_match_fld.search(/\S/) != -1 && $(this).val() != $("#" + pass_match_fld).val()) {
          if (err_first.search(/\S/) == -1) err_first = $(this).attr('id');
          err_cnt++;
          $(this).after('<span class="valid-msg">Passwords do not match.</span>');
        } else if (fld_type == 'apcounter' && parseInt($(this).val()) == 0) {
          var err_fld = $(this).attr('data-valid-field');
          if (err_first.search(/\S/) == -1) err_first = $(this).parents('ul').attr('id');
          err_cnt++;
          $("#" + err_fld).after('<span class="valid-msg">Sorry! No permission given.</span>');
        } else if (fld_type == 'checkone' && parseInt($(".checkonebox:checked").length) == 0) {
          if (err_first == '') err_first = $(this).parents('ul').attr('id');
          if (parseInt($("#" + err_first).parent('div.form-group').children('span.valid-msg').length) == 0) {
            err_cnt++;
            $("#" + err_first).after('<span class="valid-msg" style="top:-5px!important;">Please check atleast one ' + fld_lbl + '.</span>');
          }
        }
      });
    }
    if (err_cnt == 0) {
      var payment_made = false;
      var returns = false;
      if ($(".change-upload").length > 0) $(".change-upload").val('');
      if ($("#paymentDetailsBlock").length > 0 && !$("#paymentDetailsBlock").hasClass('d-none') && parseFloat($("#amount").val()) > 0 && $("#payment_method").val() != 'PayLater') {
        returns = HostedFieldsValidation();
        payment_made = true;
      }
      if (conf_submit) {
        if (confirm("Are you sure you want to " + butt_txt + "?")) {
          $("#" + parent_frm).submit();
          return true;
        } else return false;
      } else if (!payment_made || (payment_made && returns)) {
        if (!payment_made) $("#" + parent_frm).submit();
      }
      return true;
    } else {
      if (err_first != '') {
        //console.log(err_first); return false;
        var card_id = $("#" + err_first).parents('div.card-panel').attr('data-card-id');
        var holder_tab = $("#" + err_first).parents('div.responsive-tabs-panel').attr('data-elem-id');

        //console.log(holder_tab);
        //console.log(card_id);
        if ($("#" + err_first).parents('div.responsive-tabs-panel').is(":hidden")) {
          $("#" + holder_tab).trigger('click');
        }
        if ($("#" + err_first).parents('div.card-panel').length > 0 && !$("#" + err_first).parents('div.card-panel').hasClass('show')) {
          $("#" + card_id).trigger('click');
        }
        $("#" + err_first).focus();
      }
      setTimeout(function () {
        /*$("span.valid-msg").fadeOut(8000,function(){
          //$("span.valid-msg").remove();
        });*/
      }, 2000);
      return false;
    }
  });

  $("[id^='frmAddEdit'] input.form-control").keyup(function (e) {
    var elem_id = $(this).attr('id');
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == 13 && elem_id != 'oi_ba_email') {
      //$("#submit_addEdit").trigger('click');
    }
    else {
      if ($(this).val().search(/\S/) != -1 && $(this).parent('div.form-group').children('span.valid-msg').length > 0) {
        $(this).parent('div.form-group').children("span.valid-msg").remove();
      }
    }
  });

  $("#frmAddEdit input.gen-url-key").change(function (e) {
    var ukey_field = $(this).attr('data-ukey-field');
    $("#" + ukey_field).val($(this).val().replace(/[_\W]+/g, "-").toLowerCase());
    $("#" + ukey_field).trigger('change');
  });

  $("#frmAddEdit input.check-uniq").change(function () {
    var check_field = $(this).attr('data-uniq-field');
    var check_table = $(this).attr('data-uniq-table');
    var fld_lbl = $(this).parent('div.form-group').children('label.control-label').html();
    var elem_id = $(this).attr('id');
    var edit_row_id = $("#edit_row_id").val();
    //console.log(edit_row_id); return false;
    if ($(this).val().search(/\S/) != -1 && check_field.search(/\S/) != -1 && check_table.search(/\S/) != -1) {
      $(this).after('<i class="fa fa-circle-o-notch fa-spin uniq-spinner"></i>');
      //$("span.valid-msg").remove();
      $(this).parent('div.form-group').children("span.valid-msg").remove();
      $("span.chksucc-msg").remove();
      $.ajax({
        type: 'POST',
        url: BASE_URL + 'ajax/check-uniq-field-data',
        data: { 'val': $(this).val(), 'table': check_table, 'field': check_field, 'edit_row_id': edit_row_id },
        success: function (resp) {
          $("#" + elem_id).parent('div.form-group').children("i.uniq-spinner").remove();
          if (resp == 'exist') {
            $("#" + elem_id).val('').focus();
            $("#" + elem_id).after('<span class="valid-msg">' + fld_lbl + ' already in use.</span>');
          } else {
            $("#" + elem_id).after('<span class="chksucc-msg">' + fld_lbl + ' is available to use.</span>');
            //$("#"+elem_id).parent('div.form-group').children("span.chksucc-msg").fadeOut(3000).remove();
          }
        }
      });
      setTimeout(function () {
        /*$("span.valid-msg").fadeOut(8000,function(){
          //$("span.valid-msg").remove();
          $(this).parent('div.form-group').children("span.valid-msg").remove();
        });*/
      }, 2000);
      setTimeout(function () {
        $("span.chksucc-msg").fadeOut(8000, function () {
          //$("span.chksucc-msg").remove();
          $(this).parent('div.form-group').children("span.valid-msg").remove();
        });
      }, 2000);
    }
  });

  $("#frmAddEdit select.form-control").change(function (e) {
    if ($(this).parent('div.form-group').children('span.valid-msg').length > 0 && $(this).val().search(/\S/) != -1) {
      $(this).parent('div.form-group').children("span.valid-msg").remove();
    }
  });

  $("#frmAddEdit input.checkonebox").click(function (e) {
    if (parseInt($("#frmAddEdit input.checkonebox:checked").length) > 0 && parseInt($(this).parents('div.form-group').children('span.valid-msg').length) > 0) {
      $(this).parents('div.form-group').children("span.valid-msg").remove();
    }
  });

  $(document).on('click', '.close-modal', function () {
    var modal_id = $(this).parents('div.modal').attr('id');
    if (modal_id == 'commonModal') {
      $("#commonModal").find('div.modal-dialog').removeClass('modal-xl').addClass('modal-lg');
      $("#commonModal").find('div.modal-body').html('<div class="loader_wrap"><div class="loader_inner"><div class="loader"></div></div></div>');
    }
  });

  $("#user_type").change(function () {
    if ($(this).val() == 'user') {
      $(".company,.dept-level").css({ 'display': 'flex' });
      $(".type-drop,.dept-drop").show();
      $("#company_type,#department").addClass('validate-fields');
      if (!$("#principal_company").hasClass('validate-fields')) $("#principal_company").addClass('validate-fields');
    } else {
      $(".company,.type-drop,.dept-level,.dept-drop,.level-drop").hide();
      $("#department,#level").removeClass('validate-fields').val('');
      if ($("#principal_company").hasClass('validate-fields')) $("#principal_company").removeClass('validate-fields');
      if ($("#company_type").hasClass('validate-fields')) $("#company_type").removeClass('validate-fields');
    }
  });

  $(".passwd-fields").keyup(function (e) {
    var match_fld = $(this).attr('data-conf-match');
    if ($(this).val().search(/\S/) != -1) {
      $(this).addClass('validate-fields');
      if (match_fld.search(/\S/) != -1) {
        $("#" + match_fld).addClass('validate-fields');
      }
    } else {
      $(this).removeClass('validate-fields');
      if (match_fld.search(/\S/) != -1) {
        $("#" + match_fld).removeClass('validate-fields');
      }
    }
  });

  $(document).on('click', ".user-check-uncheck", function (e) {
    e.stopPropagation();
    var elm_id = $(this).attr('id');
    var rel_grp = elm_id.substring(elm_id.lastIndexOf('_') + 1);

    if ($(this).prop('checked')) {
      $(".user_" + rel_grp).attr("checked", true);
    } else {
      $(".user_" + rel_grp).attr("checked", false);
    }
  });

  var _checkPermCounter = function () {
    $("#perm_counter").val($(".menu-perm:checked").length);
  };

  $(document).on('click', ".chk_all_prem", function () {
    var elem_id = $(this).attr('id');
    var rel_id = elem_id.substring(elem_id.lastIndexOf('_') + 1);
    if ($(this).prop('checked')) {
      $("." + rel_id + "-perm").prop('checked', true);
    } else {
      $("." + rel_id + "-perm").prop('checked', false);
    }
    _checkPermCounter();
  });

  $(document).on('click', ".menu-perm", function () {
    _checkPermCounter();
  });

  $(document).on('change', ".change-upload", function (e) {
    var fld_id = $(this).attr('id');
    //var fld_val = $(this).val();
    var addl_params = false;
    var fileName = e.target.files[0].name;
    //added feb 2024, if img tag found show image else show file name as the old one
    if ($(this).parents('div.form-group').children('div.custom-file').children('label.custom-file-label').find('img').length > 0) {
      $(this).parents('div.form-group').children('div.custom-file').children('label.custom-file-label').find('img').attr('src', URL.createObjectURL(e.target.files[0]))
    }
    else if ($(this).parents('tr').find('td').find('label.custom-file-label').find('img').length > 0) {
      $(this).parents('tr').find('td').find('label.custom-file-label').find('img').attr('src', URL.createObjectURL(e.target.files[0]))
    }
    else {
      $(this).parents('div.form-group').children('div.custom-file').children('label.custom-file-label').html(fileName);//old one
    }
    var upload_dir = $(this).attr('data-upload-dir');
    var upload_type = $(this).attr('data-upload-type');
    var upload_url = "ajax/file-upload-parser";
    var progress = $(this).parents('div.form-group').children('div.upload-progress').children('progress').attr('id');
    var status = $(this).parents('div.form-group').children('div.upload-progress').children('h3.fileupload-status').attr('id');
    var ret_name = $(this).parents('div.form-group').children('div.upload-progress').children('h3.fileupload-status').children('input').attr('name');
    var ret_id = $(this).parents('div.form-group').children('div.upload-progress').children('h3.fileupload-status').children('input').attr('id');
    if (parseInt(fld_id.indexOf('artUpload_')) != -1) {
      var cntr = fld_id.substring(fld_id.lastIndexOf('_') + 1);
      addl_params = { 'order_id': $("#order_id").val(), 'art_type': $("#artwork_type_" + cntr).val() };
    }
    uploadFile(progress, status, fld_id, upload_url, upload_dir, upload_type, ret_name, ret_id, addl_params);
  });

  $(document).on('change', "#ap_user_type", function () {
    if ($(this).val().search(/\S/) != -1) {
      $("#ap_user_id").html('<option value="">Select User</option>');
      $(".menu-perm").prop('checked', false);
      $("#ap_user_id").after('<i class="fa fa-circle-o-notch fa-spin uniq-spinner"></i>');
      $.ajax({
        type: 'POST',
        url: BASE_URL + 'ajax/get-admin-users',
        data: { 'type': $(this).val(), 'comp': '' },
        success: function (resp) {
          if (resp.search(/\S/) != -1) {
            $("#ap_user_id").parent('div.form-group').children("i.uniq-spinner").remove();
            $("#ap_user_id").html(resp);
          }
        }
      });
    }
  });

  $(document).on('change', "#ap_user_id", function () {
    if ($(this).val().search(/\S/) != -1) {
      $("div.page_content_wrap").children("div.loader_wrap").show();
      $.ajax({
        type: 'POST',
        url: $("#frmAddEdit").attr('action'),
        data: { 'search_params': $("#ap_user_id").serializeArray(), 'call_type': 'ajax' },
        success: function (resp) {
          if (resp.search(/\S/) != -1) {
            $("div.page_content_wrap").children("div.loader_wrap").hide();
            $("div.page_content_wrap").html(resp);
            return false;
          }
        }
      });
    }
  });
  //end function

  /*30062023 onwards add functions from*/
  $("#user_type").change(function () {
    console.log($(this).val());
    //previously 'user'
    if ($(this).val() == '22') {
      $(".company,.dept-level").css({ 'display': 'flex' });
      $(".type-drop,.dept-drop").show();
      $("#company_type,#department").addClass('validate-fields');
      if (!$("#principal_company").hasClass('validate-fields')) $("#principal_company").addClass('validate-fields');
    } else {
      $(".company,.type-drop,.dept-level,.dept-drop,.level-drop").hide();
      $("#department,#level").removeClass('validate-fields').val('');
      if ($("#principal_company").hasClass('validate-fields')) $("#principal_company").removeClass('validate-fields');
      if ($("#company_type").hasClass('validate-fields')) $("#company_type").removeClass('validate-fields');
    }
  });

  $(document).on('click', '.change-user-status', function () {
    var elem_id = $(this).attr('id');
    var func = $(this).attr('data-action');
    var user_id = $(this).attr('data-user-id');
    var user_type = $(this).attr('data-user-type');

    if (func.search(/\S/) != -1 && user_id.search(/\S/) != -1 && user_type.search(/\S/) != -1) {
      var confirm_dialogue = "Are you sure to " + func + " the user?";
      if (confirm(confirm_dialogue)) {
        $("div.page_content_wrap").children("div.loader_wrap").show();
        $.ajax({
          type: 'POST',
          url: BASE_URL + 'ajax/change-user-status',
          data: { 'func': func, 'user_id': user_id, 'user_type': user_type },
          success: function (resp) {
            if ($.trim(resp) == 'success') {
              if (func == 'activate') {
                $("#" + elem_id).children('i').removeClass('fa-lock').addClass('fa-unlock');
                $("#" + elem_id).children('i').attr('title', 'Deactivate User');
                $("#" + elem_id).attr('data-action', 'deactivate');
              } else if (func == 'deactivate') {
                $("#" + elem_id).children('i').removeClass('fa-unlock').addClass('fa-lock');
                $("#" + elem_id).children('i').attr('title', 'Activate User');
                $("#" + elem_id).attr('data-action', 'activate');
              }
            }
            $("div.page_content_wrap").children("div.loader_wrap").hide();
          }
        });
      }
    }
    return false;
  });

  $(document).on('click', ".delete_otherdoc", function () {
    if (!$(this).hasClass('disabled')) {
      var elem_id = $(this).attr('id');
      var rel_id = elem_id.substring(elem_id.lastIndexOf('_') + 1);
      $("#ai_otherdoc" + rel_id + "_delete").val(1);
      $("#ai_otherdoc_label" + rel_id).attr('disabled', true).addClass('disabled');
      $("#otherDoc" + rel_id).attr('disabled', true);
      $(this).addClass('disabled');
    }
  });

  $(document).on('click', 'button[class*="btn"]:contains("Add More"):not(.disabled)', function () {
    var max = ($(this).is('[data-max]')) ? parseInt($(this).attr('data-max')) : 0;
    var currlength = $(this).parents('table:first').find('tr').length - 1;
    if ($(this).parents('table:first').find('tr.clone').length)
      var obj = $(this).parents('table:first').find('tr.clone:last').clone();
    else var obj = $(this).parents('table:first').find('tr>td:first').parent().clone();
    $(obj).find('input').removeClass('hasDatepicker');
    if ($(obj).find('td:last:empty')) $(obj).find('td:last').html('<a href="javascript:;" title="Delete"><i class="fa fa-trash-o trash_btn"></i></a>');
    $(obj).find('input,select,textarea').prop('disabled', false).val('');
    $(obj).find('td').each(function () {
      $(this).find('input,select').removeAttr('id');
      if ($(this).is('[data-fill]') && $.trim($(this).attr('data-fill')) != '') {
        var n = $(this).attr('data-fill').match(/\d+/);
        var newvalue = $(this).attr('data-fill').replace(n, currlength + 1);
        $(this).find('input:first').val(newvalue); $(this).attr('data-fill', newvalue);
      }
      else if ($(this).hasClass('preview')) $(this).html('');
      else if ($(this).find('div.custom-file').length) {
        $(this).find('label.custom-file-label').html('Choose file');
        $(this).find('div.upload-progress progress').removeAttr('id').val(0).hide();
        $(this).find('div.upload-progress h3.fileupload-status').removeAttr('id').removeAttr('class').addClass('fileupload-status').html(''); $(this).find('div.upload-progress input').remove();
      }
    });
    if ($(obj).find('select[name="schedule[scheduleLbl][]"]').length) {
      $(obj).find('select[name="schedule[scheduleLbl][]"] option[value!=""]:enabled').removeAttr('selected').prop('disabled', true);
      $(obj).find('select[name="schedule[scheduleLbl][]"] option[value!=""]:eq(' + currlength + ')').removeAttr('disabled').prop('selected', true);
    }
    if (max) {
      if (max > currlength) $(this).parents('table:first').find('tr:last').after(obj);
      if (max == currlength + 1) $(this).addClass('disabled').attr('title', 'You have reached maximum row adding');
    } else $(this).parents('table:first').find('tr:last').after(obj);
  });

  $(document).on('click', 'i.trash_btn:not(.disabled)', function () {
    if ($(this).parents('div.responsive-tabs-panel').find('button.disabled:contains("Add More"):first').length)
      $(this).parents('div.responsive-tabs-panel').find('button.disabled:contains("Add More"):first').removeClass('disabled').prop('disabled', false).removeAttr('title');
    $(this).parents('tr:first').remove();
    if ($('input[name="earnestmon"]').length) autoCalculate($('input[name="earnestmon"]'));
  });

  // Created By Barun //
  $("#frmAddEdit input.duplicate-this").on('change', function (e) {
    $("#url_key").val($(this).val().replace(/[_\W]+/g, "-").toLowerCase());
    //setTimeout(function() {
    $("#frmAddEdit input.check-uniq-url").change();
    //}, 1500);
  });

  $("#frmAddEdit input.validateUrl").on('keyup', function (e) {
    $(this).val($(this).val().replace(/[^a-zA-Z0-9#:./?&=]/g, "-").toLowerCase());
  });

  $("#frmAddEdit select#block_type").change(function (e) {
    if ($(this).val() == "C") $("#menu_id").addClass('validate-fields')
    else $("#menu_id").removeClass('validate-fields')
  });

  $(document).on('click', 'a.excel-params', function () {
    $("#cur_page").val(1);
    $.ajax({
      type: 'POST',
      url: $("#frmListing").attr('action'),
      data: { 'search_params': $("#frmListing .search-params").serializeArray(), 'call_type': 'download_excel_ajax' },
      beforeSend: function () {
        $("div.page_content_wrap").children("div.loader_wrap").show();
      },
      success: function (resp) {
        $("div.page_content_wrap").children("div.loader_wrap").hide();
        var recordData = JSON.parse(resp);
        if (recordData.status == "ok") {
          //$("div.page_content_wrap").html(resp);
          var $a = $("<a>");
          $a.attr("href", recordData.file);
          $("body").append($a);
          $a.attr("download", recordData.filename);
          $a[0].click();
          $a.remove();
          return false;
        }
      }
    });
  });

  $(document).on('click', 'a.convertpdf', function () {
    var url_path = $(this).attr('data-path');
    var h_type = $(this).attr('data-history-type');
    var id = $(this).attr('id');
    $.ajax({
      type: 'POST',
      url: BASE_URL + 'convertpdf/' + url_path,
      data: { 'id': id, 'call_type': 'download_pdf_ajax', 'h_type': h_type },
      beforeSend: function () {
        $("div.page_content_wrap").children("div.loader_wrap").show();
      },
      success: function (resp) {
        $("div.page_content_wrap").children("div.loader_wrap").hide();
        var recordData = JSON.parse(resp);
        if (recordData.status == "ok") {
          //$("div.page_content_wrap").html(resp);
          var $a = $("<a>");
          $a.attr("href", BASE_URL + recordData.file);
          $("body").append($a);
          $a.attr("download", recordData.filename);
          $a[0].click();
          $a.remove();
          return false;
        }
      }
    });
  });

  $(document).on('click', 'a.downloadFile', function () {
    $("div.page_content_wrap").children("div.loader_wrap").show();
    var $a = $("<a>");
    $a.attr("href", $(this).attr('data-src'));
    $("body").append($a);
    $a.attr("download", $(this).attr('data-file'));
    $a[0].click();
    $a.remove();
    $("div.page_content_wrap").children("div.loader_wrap").hide();
    return false;
  });

  $('div.ahb_select_member select:first').change(function () {
    $('div.ahb_select_member ul').hide();
    var target = $(this).parent().find('option:selected').attr('data-target');
    $(target).show();
    if ($('.check_rec:visible').length == $('.check_rec:checked:visible').length) $('#check_all_rec').prop('checked', true);
    else $('#check_all_rec').prop('checked', false);
    if ($('input.keyup-search').val().search(/\S/) != -1) $('input.keyup-search').keyup();
  });

  $(document).on('keyup', 'input.keyup-search', function () {
    if ($(this).val().search(/\S/) != -1) {
      var string = $(this).val().toLowerCase();
      $(this).parents('div.ahb_select_member:first').find('ul:visible:first').children(':contains(' + string + ')').show();
      $(this).parents('div.ahb_select_member:first').find('ul:visible:first').children(':not(:contains(' + string + '))').hide();
    } else $(this).parents('div.ahb_select_member:first').find('ul:visible:first').children().show();
  });

  $(document).on('click', 'a[href*="/addedit"]:not(.disabled)', function (e) {
    var action = $(this).attr('href').indexOf('/addedit/') !== -1 ? 'edit' : 'add';
    if (typeof check === 'undefined' || !check) e.preventDefault();
    $("#securityModalTitle").text("Security Check");
    $("div#securityModal").find("div.loader_wrap").show();
    if (typeof check === 'undefined' || !check) {
      var resp = checkPermission(action);
      if (resp) {
        check = true;
        if ($(this).find('i.fa:visible:first').length) $(this).find('i.fa:visible:first').click();
        else window.location = $(this).parent().find('a:first').attr('href');
      }
    }
  });

  $(document).on('change', '.get-state-list-for-country', function () {
    var id = $(this).val();
    var target = $(this).data('target-id');
    $.ajax({
      type: 'POST',
      url: BASE_URL + 'ajax/get-state-list-for-country',
      data: { id: id },
      success: function (data) {
        console.log(data);
        data = JSON.parse(data);
        $("#" + target).find('option').not(':first').remove();
        $("#" + target).append(data['data']);
      }
    });
    //end ajax
  });
  //end get-state-list-for-country

  //functions for decimal
  $(document).on('keypress', '.amount', function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode >= 48 && keycode <= 57 || keycode == 46) return true;
    else return false;
  });

  $(document).on('keyup', '.amount_2', function (event) {
    this.value = this.value.replace(/(\.\d\d)\d+|([\d.]*)[^\d.]/, '$1$2');
  });

  $(document).on('keyup', '.numberonly', function (event) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });


  //get_address type target
  $(document).on('change', '.get_address', function () {
    var ajax_url = BASE_URL + 'ajax/get_address';
    data = {};
    data['id'] = $(this).val();
    var type = data['type'] = $(this).data('type');
    var target = $(this).data('target');
    var target_invoice = $(this).data('target-invoice');
    $.ajax({
      type: 'POST',
      url: ajax_url,
      data: data,
      success: function (datares) {
        data = JSON.parse(datares);
        $("#" + target).val(data['data']);
        if (type == 'company') {
          $('#' + target_invoice).val(data['internal_number']);
          $('#id_invoiceno').val(data['invoice_no']);
          $('#company_country').val(data['country']);
          $('#company_state').val(data['state']);
        }
        else if (type == 'client') {
          $('#currency_symbol').val(data['currency']);
          $('.currency_symbol').text(data['currency']);
          $('#client_country').val(data['country']);
          $('#client_state').val(data['state']);
        }
        calculate_sub_total_amount();
      }
    });//end ajax
  });//end function

  //menu parent child selection
  $(document).on('click', 'input[id*=-perm-parent-]', function () {
    var child_class = $(this).attr('id').replace('parent', 'child');
    console.log(child_class);
    if ($(this).prop('checked')) {
      $('.' + child_class).prop('checked', true);
    }
    else {
      console.log('here');
      $('.' + child_class).prop('checked', false);
    }
  });
  //end menu parent child selection

  //
  $(document).on('change', '.change-populate-dropdown', function () {
    var target = $(this).data('target');
    var ajax_url = BASE_URL + 'ajax/change-populate-dropdown';
    data = {};
    data['id'] = $(this).val();
    data['type'] = $(this).data('type');
    $.ajax({
      type: 'POST',
      url: ajax_url,
      data: data,
      success: function (datares) {
        //console.log(datares);
        $("#" + target).find('option').not(':first').remove();
        $("#" + target).append(datares);
      }
    });//end ajax
  });//end function

  $(document).on('click', '.block-unit-tabs', function () {
    let elem_id = $(this).attr('id');
    let block_id = elem_id.substring(elem_id.lastIndexOf('_') + 1);

    $(".block-unit-tabs").removeClass('active');
    $(this).addClass('active');

    $(".tr-block-units").hide();
    $(".tr_block_" + block_id).show();
  });

  $(document).on('click', '.unit-plan-tabs', function () {
    let elem_id = $(this).attr('id');
    let unit_type = elem_id.substring(elem_id.lastIndexOf('-') + 1);

    $(".unit-plan-tabs").removeClass('active');
    $(this).addClass('active');

    $(".unit-plan-holder").hide();
    $("#unitPlan" + unit_type + "BHK").show();
  });

  //addrows clone table format with delete row
  $(document).on('click', '.add_more_row_clone', function () {
    var tableBody = $(this).parentsUntil('stop', 'table:first').find("tbody:first");
    var total_rows = tableBody.find("> tr").length;
    var insert_type = $(this).data('insert-type');
    var max_rows = $(this).data('max-rows');
    trFirst = tableBody.find("> tr:first");
    trNew = trFirst.clone();
    if ($(this).hasClass('parent_node')) {
      trNew.find('input,textarea,select,hidden').each(function () {
        $(this).attr('name', $(this).attr('name').replace(0, tableBody.find('> tr').length));//replace parent index
      });
      trNew.find('table').find('tbody').find('tr:gt(0)').remove();//keep only first row
    }
    //console.log(trNew.html());
    trNew.find('.delete_this_row_clone').removeClass('d-none');
    trNew.find('input,textarea,select').not("input[type='checkbox']").not("select[name*='SHOW_']").val('');
    //change all ids
    trNew.find("*").each(function () {
      if ($(this).attr('id') != undefined) {
        $(this).attr('id', $(this).attr('id').replace(0, total_rows));//replace parent index
      }
      if ($(this).attr('for') != undefined) {
        $(this).attr('for', $(this).attr('for').replace(0, total_rows));//replace parent index
      }
    });
    //replace img with default image if img tag exists
    if (trNew.find('img').length) {
      trNew.find('img').attr('src', $(this).data('img'));
      //trNew.find('label:eq(0)').html('');
    }

    if (insert_type == 'after') {
      tableBody.find("> tr:last").after(trNew);
    }
    else {
      tableBody.find("> tr:first").before(trNew);
    }
  });
  //delete section
  $(document).on('click', '.delete_this_row_clone', function () {
    $(document).find("a.add_more_row_clone").removeClass('d-none');
    if ($(this).hasClass('parent_node')) {
      $(this).parentsUntil('stop', 'tr:first').parentsUntil('stop', 'tr:first').remove();
    }
    else {
      $(this).parentsUntil('stop', 'tr:first').remove();
    }
  });
  //end addrows clone table format with delete row###

  //addrows clone div format with delete row
  $(document).on('click', '.add_more_row_clone_div', function () {
    var source_content = $(this).parentsUntil('stop', '.row:first').find("> .source:first");
    var source_content_all = $(this).parentsUntil('stop', '.row:first').find("> .source");
    var insert_type = $(this).data('insert-type');
    var max_rows = $(this).data('max-rows');
    var total_rows = source_content_all.length;
    if (total_rows >= max_rows) {
      $(this).addClass('d-none');
      return false;
    }

    //trFirst = tableBody.find("> tr:first");
    new_content = source_content.clone();
    if ($(this).hasClass('parent_node')) {
      new_content.find('input,textarea,select,hidden').each(function () {
        $(this).attr('name', $(this).attr('name').replace(0, source_content_all.length));//replace parent index
      });
      new_content.find('> .source:gt(0)').remove();//keep only first row
    }
    //change all ids
    new_content.find("*").each(function () {
      if ($(this).attr('id') != undefined) {
        $(this).attr('id', $(this).attr('id').replace(0, source_content_all.length));//replace parent index
      }
      if ($(this).attr('for') != undefined) {
        $(this).attr('for', $(this).attr('for').replace(0, source_content_all.length));//replace parent index
      }
    });
    //replace img with default image if img tag exists
    if (new_content.find('img').length) {
      new_content.find('img').attr('src', $(this).data('img'));
      new_content.find('label:eq(0)').html('');
    }
    //return false;
    new_content.find('.delete_this_row_clone_div').addClass('d-none');
    new_content.find('.view_this_row_clone_div').addClass('d-none');
    new_content.find('input,textarea,select').val('');
    //console.log(new_content.html()); 
    //return false;
    if (insert_type == 'after') {
      $(this).parentsUntil('stop', '.row:first').find("> .source:last").after(new_content);
    }
    else {
      $(this).parentsUntil('stop', '.row:first').find("> .source:first").before(new_content);
    }
  });
  $(document).on('click', '.delete_this_row_clone_div', function () {
    $(this).parentsUntil('stop', 'div.row').find(".add_more_row_clone_div").removeClass('d-none');
    if ($(this).hasClass('parent_node')) {
      $(this).parentsUntil('stop', 'div.source:first').remove();
    }
    else {
      $(this).parentsUntil('stop', 'div.source:first').remove();
    }
  });
  //end addrows clone table format with delete row

  $(document).on('click', '.delete_icon', function () {
    $(this).parents('div.form-group').find('.delete-checkbox').attr('checked', true);
    $(this).parents('div.form-group').find('.view_logo_img').addClass('d-none');
  });

  //override contains to be case insensitive
  $.expr[':'].contains = function (a, i, m) {
    return $(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };

  //end search auto_complete section###
});
//end documnet ready
