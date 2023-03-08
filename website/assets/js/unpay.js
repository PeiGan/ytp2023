$("#send_mail").on('click', function(){
    var templateParams={
        to_mail: $("#email").val(), 
        name: $("#name").val(), 
        subject: $("#subject").val(), 
        message: $("#message").val(), 
        account: "peter5269", 
        password: "peter20050324", 
    };
    emailjs.send('ck_platypus', 'template_s393vbw', templateParams, 'bhla9z9aPQZ1aXubS')
    .then(function(response) {
        alert('SUCCESS!');
    }, function(error) {
        alert('FailED...', error);
    });
    var a = {
        data: $("#subject").val()+','+Math.random().toString(36).slice(-8)+','+$("#description").val()+','+$("#money").val()+','+$("#name").val()+','+$("#message").val()+','+$("#email").val(),
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1wyzTbgj5W0HfIwCBW0vqEeuEJYzo7Jn6_DumJ8Z-gyo/edit#gid=0',
        sheetTag: 'first'
    };
    console.log(a);
    $.get('https://script.google.com/macros/s/AKfycbzavBjXnMUWcQk13iTZUabiehcqfcfRCvn81a4xnADzmU0LEdKjs7OpakLxndgYQosukQ/exec', a, function(){   
        a = {
            data : 0, 
            sheetUrl : 'https://docs.google.com/spreadsheets/d/1wyzTbgj5W0HfIwCBW0vqEeuEJYzo7Jn6_DumJ8Z-gyo/edit#gid=0',
            sheetTag : 'first',
            row: 1,
            col: 1,
            endRow : 1,
            endCol : 1
        };
        console.log(a);
        $.get('https://script.google.com/macros/s/AKfycbw2cEr58WMddT5i-PydfnFhh3d3wqVgrCLsdB7MPFZI7bU1_3OqvQevgvLystQGcZ7SVg/exec',a, function(data){
            console.log(data);
            a.data=parseInt(data)+1;
            console.log(a.data);
            $.get('https://script.google.com/macros/s/AKfycbzG02T3-mXBSg32dGtl_35oOSs08GfEPpjSRvAQ3wAn7K33IQsHD9IcH2a7eQwXiBMBXQ/exec', a);
        });
    });
});