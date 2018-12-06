<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  $dir = __DIR__.'/gallery';
  $files = array_slice(scandir($dir), 2);
  $response = array();
  foreach($files as $key => $file){
     if( !is_dir($file) ){
      $file_path = $dir . '/' . $file;
      if( strpos( mime_content_type($file_path), "image" ) !== false ){
        $response[$key] = $file;
      }
    }
  }
  echo json_encode(array_chunk($response, 4));
?>