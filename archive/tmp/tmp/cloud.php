<?php
  header("x-goog-project-id: rising-goal-479");
  header("x-goog-api-version: 1");    
  $access_id = "GOOGBEINSY3AB37BXYLW";
  $bucket = "yc-dropbox";
  $url = "http://".$bucket.".storage.googleapis.com";
  $policy_json = '{"expiration":"2016-01-01T00:00:00.000Z","conditions":[["starts-with","$key",""],["starts-with","$Content-Type","image/"],["content-length-range",0,10000000],{"acl":"bucket-owner-full-control"},{"bucket":"yc-dropbox"}]}';
  $secret_key = "G9otc+YjQAyXegXtGjt425Mc/8usdM/8jf8a++RM";
  $policy = base64_encode(utf8_encode($policy_json));
  $signature  = base64_encode(hash_hmac("sha1", $policy, $secret_key, true));
  /*
  $authSignature = $access_id.":".$signature;
  $timestamp  = date("r");
  $canonicalizedResources = "/".$bucket."/"; 
  $headers = array('Host: '.$bucket.'.commondatastorage.googleapis.com',
                   'Date: '.$timestamp, $version_header,
                   $project_header,'Content-Length: 0',
                   'Authorization: GOOG1 '.$authSignature);

  $c   = curl_init($url);
  curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($c,CURLOPT_HTTPHEADER,$headers);
  curl_setopt($c, CURLOPT_PUT, TRUE);
  $xml = curl_exec($c);
  print($xml); 
  */
?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Upload</title>
    </head>
    <body>
<form action="<?=$url;?>" method="post" enctype="multipart/form-data">
<input type="text" name="key" value="">
<input type="hidden" name="bucket" value="<?=$bucket;?>">
<input type="hidden" name="Content-Type" value="image/jpeg">
<input type="hidden" name="GoogleAccessId" value="<?=$access_id;?>">
<input type="hidden" name="acl" value="bucket-owner-full-control">
<input type="hidden" name="policy" value="<?=$policy;?>">
<input type="hidden" name="signature" value="<?=$signature;?>">
<input name="file" type="file">
<input type="submit" value="Upload">
</form>        
    </body>
</html>
