function clearFilters(){
  $(".closing-icon").remove();
  $(".active_tag").removeClass('active_tag');
  $('.card').show();
}

function showContactForm(){

}

function toggleTags(button, tag){
  if(button.attr('class').indexOf('active_tag') > -1){
    button.removeClass("active_tag");
    button.html(tag);
  } else {
    button.html(tag + '<i class="material-icons left closing-icon">close</i>');
    button.addClass("active_tag");
  }
}

function addActiveTags(buttons){
  var active_tags = [];
  for(var j=0; j < buttons.length; j++){
    current_button = $(buttons[j]);
    if(current_button.attr('class').indexOf('active_tag') > -1){
      active_tags.push(current_button.attr('val'));
    }
  }
  return active_tags;
}

function showposts(posts, active_tags){
  posts.each(function(i){
    var post = $(posts[i]);
    post.hide();

    $.each(active_tags, function(k){
      var active_tag = active_tags[k],
      postContainsTag = post.attr('tags').indexOf(active_tag) > -1;

      if(postContainsTag){
        post.show();
      }
    })
  })

  var activeTagsAreEmpty = active_tags.length === 0;

  if(activeTagsAreEmpty){
    posts.show();
  }
}

function hideCloseIcons(element){
  element.children().remove('i');
}

function assignColors(pagename, color){
  // debugger
  $('body').css('background-color', color);
  $('.card-action a').css('color', color);
  // debugger
  $('.nav-wrapper').css('background-color', color);
  $("a:contains('" + pagename + "')").parent().css('background-color', color);
  $("a:contains('" + pagename + "')").css('color', "white");
}

function embedPost(evt, post_url) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById("mainPost").style.display = "block";
  document.getElementById("mainPost").innerHTML='<iframe src="'+ post_url +'" style="width:100%; height:100%; overflow: hidden; border:none;" seamless="seamless" allow-top-navigation></iframe>';
  // document.getElementById(cityName).innerHTML='<object type="text/html" data="'+post_url+'" style="min-width:100%; min-height: 100%;  style="overflow:hidden;" ></object>';

  evt.currentTarget.className += " active";

}
