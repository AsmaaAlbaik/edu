(function ($) {
    'use strict';
    $(function () {

        'use strict';
        var todoListItem = $('.todo-list');
        var todoListInput = $('.todo-list-input');
        var teacher_id = $('#teacher_id').val();
        // document.getElementById("db_specialty").addEventListener("change",  function(){
        //     console.log($(this));
        // });

        $("#db_specialty").on("change", function () {
            console.log($(this));
            var specialty_id = $(this).children("option:selected").val();
            // console.log(specialty_id)
            var specialty_title = $(this).children("option:selected").text();

            // $('.todo-list li').each(function (key, val) {
            //     var id = $(this).find('.remove').data('specialty-id');
            //     console.log();
            //     if (id == specialty_id) {
            //         console.log("is Equal");
            //     } else {
            //         return;
            //     }
            // });

            // $.ajax({
            //     type: "POST",
            //     url: window.location.origin + '/add-teaching-specialty',
            //     data: {
            //         '_token': $('meta[name="csrf-token"]').attr('content'),
            //         'specialty_id': specialty_id,
            //         'teacher_id': teacher_id
            //     },
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            //     success: function (res) {
            //         if (res) {
                        todoListItem.append(`<li><div class='form-check'><label class='form-check-label'> ${specialty_title} 
                            <i class='input-helper'></i></label></div><i class='remove fas fa-times-circle'' 
                            data-specialty-id="${specialty_title}" data-teacher-id="${specialty_id}"></i></li>`);
            //             swal(
            //                 ' اضافة تخصص',
            //                 'تمت عملية اضافة التخصص بنجاح',
            //                 'success'
            //             )
            //         } else {
            //             swal(
            //                 'خطأ بالاضافة',
            //                 'هذا التخصص مضاف مسبقا',
            //                 'warning'
            //             )
            //         }

            //     }
            // });


        })
        $('.todo-list-add-btn').on("click", function (event) {
            event.preventDefault();

            var specialty_title = $(this).parent().prevAll('.todo-list-input').val();
            var teacher_id = $(this).parent().prevAll('.todo-list-input').data('teacher-id');
            //console.log('item :' + item);
            //console.log('teacher_id : ' + teacher_id);
            var response;

            if (specialty_title) {

                // $.ajax({
                //     type: "POST",
                //     url: window.location.origin + '/add-new-teaching-specialty',
                //     data: {
                //         '_token': $('meta[name="csrf-token"]').attr('content'),
                //         'specialty_title': specialty_title,
                //         'teacher_id': teacher_id
                //     },
                //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                //     success: function (res) {
                //         if (res) {
                //             response = res;

                //             console.log('successfully added');

                //             swal(
                //                 ' اضافة تخصص',
                //                 'تمت عملية اضافة التخصص بنجاح',
                //                 'success'
                //             )
                //         }
                //     }
                // });
                todoListItem.append(`<li><div class='form-check'><label class='form-check-label'> ${specialty_title} 
                <i class='input-helper'></i></label></div><i class='remove fas fa-times-circle'' 
                data-specialty-id="${specialty_title}" data-teacher-id="${teacher_id}"></i></li>`);
                todoListInput.val("");

            }

        });

        todoListItem.on('change', function () {
            console.log($(this));
            if ($(this).attr('checked')) {
                $(this).removeAttr('checked');
            } else {
                $(this).attr('checked', 'checked');
                console.log("Asma")

            }
            console.log($(this).closest("li"));
            $(this).closest("li").toggleClass('completed');

        });

        // todoListItem.on('contentChanged',alert('UL content changed!!!'));

        todoListItem.on('click', '.remove', function () {
            $(this).parent().remove();
            var specialty_id = $(this).data('specialty-id');
            var teacher_id = $(this).data('teacher-id');

            //console.log(specialty_id);
            //console.log(teacher_id);

            // $.ajax({
            //     type: "POST",
            //     url: window.location.origin + '/delete-teaching-specialty',
            //     data: {
            //         '_token': $('meta[name="csrf-token"]').attr('content'),
            //         'specialty_id': specialty_id,
            //         'teacher_id': teacher_id
            //     },
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            //     success: function (res) {
            //         if (res) {
            //             //console.log('success');
            //             swal(
            //                 'حذف التخصص',
            //                 'تمت عملية حذف التخصص بنجاح',
            //                 'success'
            //             )
            //         }
            //     }
            // });


        });


        var todoListItem2 = $('.todo-list2');
        // console.log(todoListItem2)
        var todoListInput2 = $('.todo-list-input2');
        $('.todo-list-add-btn2').on("click", function (event) {
            // console.log('hi ')
            event.preventDefault();

            var item = $(this).parent().prevAll('.todo-list-input2').val();
            // console.log(item)
            var teacher_id = $(this).parent().prevAll('.todo-list-input2').data('teacher-id');
            //console.log('teacher_id :' + teacher_id);

            if (item) {
                todoListItem2.append("<li><div class='form-check'><label class='form-check-label'>" + item + "<i class='input-helper'></i></label></div><i class='remove fas fa-times-circle'></i></li>");
                todoListInput2.val("");

                // $.ajax({
                //     type: "POST",
                //     url: window.location.origin + '/add-new-teaching-subject',
                //     data: {
                //         '_token': $('meta[name="csrf-token"]').attr('content'),
                //         'subject_title': item,
                //         'teacher_id': teacher_id
                //     },
                //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                //     success: function (res) {
                //         if (res) {
                //             console.log('successfully added');
                //             swal(
                //                 ' اضافة مادة',
                //                 'تمت عملية اضافة المادة بنجاح',
                //                 'success'
                //             )
                //         }
                //     }
                // });


            }

        });
		
		
		
		
		$("#db_subject").on("change", function () {
            //console.log($(this));
            var subject_id = $(this).children("option:selected").val();
            var subject_title = $(this).children("option:selected").text();

			console.log(subject_id);
			console.log(subject_title);

            // $.ajax({
            //     type: "POST",
            //     url: window.location.origin + '/add-teaching-subject',
            //     data: {
            //         '_token': $('meta[name="csrf-token"]').attr('content'),
            //         'subject_id': subject_id,
            //         'teacher_id': teacher_id
            //     },
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            //     success: function (res) {
            //         if (res) {
                        todoListItem2.append(`<li><div class='form-check'><label class='form-check-label'> ${subject_title} 
                            <i class='input-helper'></i></label></div><i class='remove fas fa-times-circle' 
                            data-subject-id="${subject_title}" data-teacher-id="${teacher_id}"></i></li>`);
                        // swal(
            //                 'إضافة مادة',
            //                 'تمت عملية إضافة المادة بنجاح',
            //                 'success'
            //             )
            //         } else {
            //             swal(
            //                 'خطأ بالاضافة',
            //                 'هذه المادة مضافة مسبقا',
            //                 'warning'
            //             )
            //         }

            //     }
            // });
			
        })
		
		
		

        todoListItem2.on('change', '.checkbox', function () {
            console.log($(this));
            if ($(this).attr('checked')) {
                $(this).removeAttr('checked');
            } else {
                $(this).attr('checked', 'checked');
                console.log("Asma")

            }
            console.log($(this).closest("li"));
            $(this).closest("li").toggleClass('completed');

        });

        todoListItem2.on('click', '.remove', function () {
            $(this).parent().remove();
            var subject_id = $(this).data('subject-id');
            var teacher_id = $(this).data('teacher-id');

            //console.log(subject_id);
            // console.log(teacher_id);

            // $.ajax({
            //     type: "POST",
            //     url: window.location.origin + "/delete-teaching-subject",
            //     data: {
            //         '_token': $('meta[name="csrf-token"]').attr('content'),
            //         'subject_id': subject_id,
            //         'teacher_id': teacher_id
            //     },
            //     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            //     success: function (res) {
            //         if (res) {
            //             //console.log('success');
            //             swal(
            //                 'حذف المادة',
            //                 'تمت عملية حذف المادة بنجاح',
            //                 'success'
            //             )
            //         }
            //     }
            // });


        });


    });


})(jQuery);