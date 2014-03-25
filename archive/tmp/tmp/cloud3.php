<?php
  header("x-goog-project-id: rising-goal-479");
  header("x-goog-api-version: 1");    
  $access_id = "GOOGBEINSY3AB37BXYLW";
  $acl = "bucket-owner-full-control";
  $acl_name = "acl";
  $bucket = "yc-dropbox";
  $bucket_name = "bucket";
  $success_code = 201;
  $success_code_name = "success_action_status";
  $url = "http://".$bucket.".storage.googleapis.com";
  $policy_json = '{"expiration":"2015-01-01T00:00:00.000Z","conditions":[["starts-with","$key",""],["content-length-range",1,10000000],{"'.$acl_name.'":"'.$acl.'"},{"'.$bucket_name.'":"'.$bucket.'"},{"'.$success_code_name.'":"'.$success_code.'"}]}';
  $secret_key = "G9otc+YjQAyXegXtGjt425Mc/8usdM/8jf8a++RM";
  $policy = base64_encode(utf8_encode($policy_json));
  $signature  = base64_encode(hash_hmac("sha1", $policy, $secret_key, true));
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Upload</title>
    </head>
    <body>
        <form action="<?=$url;?>" method="post" enctype="multipart/form-data">
            <input type="hidden" id="key" name="key" value="9876545321">
            <input type="hidden" name="GoogleAccessId" value="<?=$access_id;?>">
            <input type="hidden" name="<?=$acl_name;?>" value="bucket-owner-full-control">
            <input type="hidden" name="<?=$success_code_name;?>" value="<?=$success_code;?>">
            <input type="hidden" name="policy" value="<?=$policy;?>">
            <input type="hidden" name="signature" value="<?=$signature;?>">
            <input name="file" type="file">
            <input type="submit" value="Upload">
        </form>        
    </body>
</html>
