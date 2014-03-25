function initEvents() 
{
    onFormChange();
    onFormSubmit(); 
    onFileChange();   
}

function onFileChange() 
{
    $(document).on("change", "#file", function (event)
    {
        var filename = $("#file").val();
        if (filename != "")
        {
            var fileInput = document.getElementById("file");
            var blob = fileInput.files[0];
            var name = $("#lineItemId").val();
            uploadFile(name, blob);
        }
    });
}

function onFormChange() 
{
    $(document).on("change", "input.yc-form-field,select.yc-form-field", function (event)
    {
        if (!isValid($(this).val(), $(this).attr("type")))
        {
            notify("這裡必須填入正確的資料。Valid data is required here.");
        }
    });    
}

function onFormSubmit() 
{
    $(document).on("click", ".yc-submit", function (event) {
        submit();
    });
}