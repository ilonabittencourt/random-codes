jQuery(document).ready(function( $) {
var mediaUploader;
$('#upload-button-1, #upload-button-2, #upload-button-3').on('click', function(e) {
    e.preventDefault();
    if( mediaUploader ){
        mediaUploader.open();
        return;
    }
    mediaUploader = wp.media.frames.file_frame = wp.media({
        title: 'Upload', 
        button: {
            text: 'Upload'
        },
        multiple: false
    });
    
    mediaUploader.on('select', function () {
       attachment = mediaUploader.state().get('selection').first().toJSON();
        $('#preview-fav, #preview-grav, #preview-thumb').val(attachment.url);
        $('.favicon-preview, .gravatar-preview, .thumbnail-preview')
        .css('background','url(' + attachment.url + ')');
        
    });
    
    mediaUploader.open();
    
});
});
