var popupLinkId1 = '#open-popup-link-1';
var popupLinkId2 = '#open-popup-link-2';

var popupId1 = $(popupLinkId1).attr('href');
var popupId2 = $(popupLinkId2).attr('href');

$(popupLinkId1).magnificPopup({
  type: 'inline',
  callbacks: {
    open: function() {
      bindPopup2Link(popupLinkId2, popupId1, popupId2);
    },
    afterClose: function() {
      $(popupLinkId2).unbind('click');
    }
  }
});

function bindPopup2Link(popupLink, modalId, donorPopupId) {
  $(popupLink).click(function() {
    var oldHtml = $(modalId).html();
    var modal = $(modalId);
    modal.html($(donorPopupId).html() + $('.mfp-close')[0].outerHTML);

    $.magnificPopup.instance.close = function() {
      modal.html(oldHtml);
      $.magnificPopup.instance.close = $.magnificPopup.proto.close;
      bindPopup2Link();
    }
  });
}
