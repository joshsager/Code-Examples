<?php
if ( function_exists('register_sidebar') )
    register_sidebar(
      array(
        'id'=>'primary',
        'name'=>__('Primary')
      )
    );
    
        register_sidebar(
      array(
        'id'=>'secondary',
        'name'=>__('Secondary')
      )
    );
?>