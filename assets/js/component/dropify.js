var drEvent = $('.dropify').dropify({
    messages: {
        'default': 'قم بالضغط على المستطيل أو أفلت الملف هنا',
        'replace': 'قم بالضغط على المستطيل أو أفلت الملف هنا',
        'remove':  'حذف',
        // 'error':   'حدث خطأ !'
    }

});
drEvent.on('dropify.afterClear', function(event, element){
    // alert('File deleted');
});
