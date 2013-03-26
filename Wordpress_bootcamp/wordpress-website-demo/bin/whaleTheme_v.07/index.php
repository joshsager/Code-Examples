<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	?></title>
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url')?>/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url')?>/css/styles.css" />
	</head>
	<body>
		<!-- N A V I G A T I O N -->
		<section id="navigation">
			<nav>
				<?php wp_nav_menu(array('show_home'=>true)); ?>
			</nav>
			<form method="get" id="search-form" action="<?php bloginfo('url'); ?>">
 			<input type="search" id="search" name="search" value="<?php if(trim(wp_specialchars($s,1))!='') echo trim(wp_specialchars($s,1));else echo 'Search '; ?>" />
  			<label for="search"></label>
  			<!--<input id="submitButton" type="submit" value="search" />-->
</form>
			
			
		</section>
		<section id="main">
	 	   <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					
				<header>	
				<!-- Display the Title as a link to the Post's permalink. -->
				<h1><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
				<time><?php the_date('M dS Y'); ?></time>
	 	   		<h2>By <?php echo get_the_author(); ?> - <?php edit_post_link('edit post') ?></h2>
				</header>
				
				<!-- Display the Post's Content in a div box. -->
				<div class="entry">
				<?php the_content('More...','',true);?>
				<?php /*the_excerpt(); */?>
				
      			<?php comments_popup_link();?>


      <?php comments_template( '', true ); ?>
      

				
				</div>
				<?php endwhile; else: ?>
				<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
				
				
				<?php endif; ?>
				
				<hr />
		</section>
		<aside id="sidebar">
			<?php dynamic_sidebar('primary'); ?>
			<hr />
			<?php dynamic_sidebar('secondary'); ?>
			<hr />
		</aside>
		
		<footer class="clear">
		<footer class="clear" id="whale"></footer>
		</footer>
	</body>
</html>