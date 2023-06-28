<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $target_dir = 'uploads/';
    $target_file = $target_dir . basename($_FILES['fileToUpload']['name']);
    $upload_ok = true;
    $image_file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    // Check if file is an actual image or a fake image
    $check = getimagesize($_FILES['fileToUpload']['tmp_name']);
    if ($check === false) {
        echo 'File is not an image.';
        $upload_ok = false;
    }
    
    // Check if file already exists
    if (file_exists($target_file)) {
        echo 'Sorry, file already exists.';
        $upload_ok = false;
    }
    
    // Check file size
    if ($_FILES['fileToUpload']['size'] > 500000) {
        echo 'Sorry, your file is too large.';
        $upload_ok = false;
    }
    
    // Allow only certain file formats
    if ($image_file_type !== 'jpg' && $image_file_type !== 'jpeg' && $image_file_type !== 'png') {
        echo 'Sorry, only JPG, JPEG, and PNG files are allowed.';
        $upload_ok = false;
    }
    
    // If everything is ok, try to upload file
    if ($upload_ok) {
        if (move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file)) {
            echo 'The file ' . htmlspecialchars(basename($_FILES['fileToUpload']['name'])) . ' has been uploaded.';
        } else {
            echo 'Sorry, there was an error uploading your file.';
        }
    }
}
?>
