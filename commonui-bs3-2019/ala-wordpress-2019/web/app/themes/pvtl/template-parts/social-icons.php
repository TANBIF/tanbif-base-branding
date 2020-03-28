<?php
/**
 * Template part for Social Icons
 *
 * @package PVTL
 * @author Sheldon Braxton
 * @since PVTL Boilerplate 2.0.1
 */

	$social = array(
		'facebook'  => get_field( 'facebook_page', 'option' ),
		'instagram' => get_field( 'instagram_page', 'option' ),
		'twitter'   => get_field( 'twitter_page', 'option' ),
		'snapchat'  => get_field( 'snapchat_page', 'option' ),
		'linkedin'  => get_field( 'linkedin_page', 'option' ),
		'youtube'   => get_field( 'youtube_page', 'option' ),
		'pinterest' => get_field( 'pinterest_page', 'option' ),
	);
	// Do a count of active social accounts.
	$social_count = count(
		array_filter(
			$social,
			function( $link ) {
				return $link;
			}
		)
	);
	?>
<?php if ( $social_count > 0 ) : ?>
	<ul class="social">
	<?php if ( ! empty( $social['facebook'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['facebook'] ); ?>" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['instagram'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['instagram'] ); ?>" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['twitter'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['twitter'] ); ?>" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['youtube'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['youtube'] ); ?>" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['linkedin'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['linkedin'] ); ?>" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['snapchat'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['snapchat'] ); ?>" target="_blank"><i class="fab fa-snapchat-ghost"></i></a></li>
	<?php endif; ?>
	<?php if ( ! empty( $social['pinterest'] ) ) : ?>
		<li><a href="<?php echo esc_url( $social['pinterest'] ); ?>" target="_blank"><i class="fab fa-pinterest"></i></a></li>
	<?php endif; ?>
	</ul>
<?php endif; ?>
