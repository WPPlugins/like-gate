=== Like Gate ===
Contributors: lordspace,orbisius
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7APYDVPBCSY9A
Tags: wordpress,wp,plugins,facebook,fb,like,likes,socia media,social media,viral,viral content,graph,open graph,open,free,Like Locker,Like Locker Pro,likes,like unlocker,unlocker,like to read,read like,read like pro,pro,Facebook Share to Unlock, Like to Unlock, Share Lock, Like Lock,share,facebook unlock,facebook lock,facebook locker, like button, open graph protocol, social plugins, for wordpress, button, widget, sidebar widget, shortcode, like, generator, socialwidget, likebutton, gb-world,gbworld, meta tags, shortcode like, gbwiki, gb-world, exclude, live support, recommend, featured image, featured post, dynamic, twitter, twitter button, page, plugin, post, wordpress like, recommendation, widgets, activity feed, fblike, fb like, opengraph, analyse,analyze, iframe, xfbml, javasdk, send button, send, sendbutton, new, update, url linter, lint, tools, facebook url linter, template, template function, php, php function, connect, simple, otto, otto42, javascript, comments, share, status
Requires at least: 3.0
Tested up to: 3.9.1
Stable tag: 1.1.6
License: GPLv2 or later

Like Gate allows you to reveal some hidden/secret content when the user likes the article. Therefore increasing the likeness of your articles.

== Description ==

Like Gate allows you to reveal some hidden/secret content when the user likes the article. All you have to do is insert some content
between tags and that information will be shown after the like.
This could be image, download link to an ebook, YouTube video (using iframe)

= Like Gate (Lite / This plugin) Benefits / Features =
* Increase likes of your articles
* When somebody likes your article this will appear on their Facebook wall for all of their friends to see.
* Easy to use

= Like Gate Pro Benefits / Features =
* Change the language of the Like button
* Choose where the the like should go to (e.g. to blog post, your site, or your Facebook fan page) by entering the url parameter
* Add Call to Action before each Like button generated by this plugin
* Hide Facebook comment box after like (sometimes, after people like your piece of content Facebook will show a comment box
            which can obstruct the view of the hidden content.
* ... and more</li>

Learn more about <a href="http://club.orbisius.com/products/wordpress-plugins/like-gate-pro/?utm_source=like-gate&utm_medium=plugin-readme&utm_campaign=product"
    target="_blank" class="button-primary">Like Gate Pro</a>

Note: When you purchase the Pro version you will support our efforts in improving both plugins.

= Demo =

http://www.youtube.com/watch?v=gFatlDwc8uU


= How to Create a Facebook App for Like Gate WordPress Plugins =
http://www.youtube.com/watch?v=Bfumb7jXuwE

= Want to help development of the plugin? =
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7APYDVPBCSY9A" target="_blank">Donate</a>

= Author =

Svetoslav Marinov (Slavi) | <a href="http://orbisius.com" title="Custom WordPress Development, WordPress Plugin Development, Facebook App Development in Niagara Falls, St. Catharines, Ontario, Canada" target="_blank">WordPress Consultant - Orbisius.com</a>

= Support =
> Support is handled on our site: <a href="http://club.orbisius.com/forums/forum/community-support-forum/wordpress-plugins/like-gate/?utm_source=like-gate&utm_medium=plugin-readme&utm_campaign=product"
 target="_blank">http://club.orbisius.com/forums/forum/community-support-forum/wordpress-plugins/like-gate/</a>
> Please do NOT use the WordPress forums or other places to seek support.

== Installation ==

= Automatic Install =
Please go to WordPress Admin &gt; Plugins &gt; Add New Plugin &gt; Search for: Like Gate and then press install

= Manual Installation =
1. Upload like-gate.zip into to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Sometimes a confirmation is required after a like. Why? =
Read more in this: http://forum.developers.facebook.net/viewtopic.php?id=93201

= AWeber (JavaScript) forms do not appear. Why? =

Please, use the *iframe* solutions if possible for now.
It seems when the hidden code contains script tag the script code doesn't get evaluated/executed.

= If I disable the plugin what would happen with the short codes? =
When you disable the plugin (that's within the plugin but the plugin is activate in WordPress) all
the short codes will be removed (visually) but not from the database.
It is recommended to disable the plugin and not deactivate/uninstall it when you don't need it anymore.
That way you won't see any unreplaced short tags in your posts.

= Want to help development of the plugin? =
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7APYDVPBCSY9A" target="_blank">Donate</a>

= Run into issues or have questions/suggestions? =

Support is handled on our site: <a href="http://club.orbisius.com/forums/forum/community-support-forum/wordpress-plugins/like-gate/?utm_source=like-gate&utm_medium=plugin-readme&utm_campaign=product"
 target="_blank">http://club.orbisius.com/forums/forum/community-support-forum/wordpress-plugins/like-gate/</a>
Please do NOT use the WordPress forums or other places to seek support.

== Screenshots ==
1. Plugin icon when editing post/page
2. Plugin UI for inserting short tags
3. Inserted tags

== Upgrade Notice ==
n/a

== Changelog ==

= 1.1.6 =
* Fixed a notice about suffix.

= 1.1.5 =
* The fix for the WP 3.9 was breaking versions < 3.9

= 1.1.4 =
* Made TinyMCE/editor plugin compatible with WP 3.9
* Added a minified admin .css file

= 1.1.3 =
* Tested with wp 3.8.1

= 1.1.2 =
* Corrected links to support forums (using direct links to the forum)

= 1.1.1 =
* Add info about Pro

= 1.1.0 =
* Fixed: Some characters such as '&' were encoded strangely
* Fixed: Showing saved status after Options Save Changes
* Preserved options in case Pro version is install i.e. Like Gate Lite doesn't override Like Gate Pro options.

= 1.0.9 =
* Tested with wp 3.8
* Rewrote how the whole shortcodes were replaces. Now replies on WP shortcodes API and not on custom ones
* Moved some scripts to their own folders.
* Do not load Like Gate (lite) buttons if Pro is active
* Fixes and improvements.

= 1.0.8 =
* Fixed link to the Like Gate settings page

= 1.0.7 =
* Added Facebook app_id so the user can create a facebook app.
* Tested with wp 3.7.1
* Add new UI
* Fixes

= 1.0.6 =
* Removed the window script which was loading WP core files. This causes issues with non-standard WP setup.
* Added a text box in the like gate popup so the user can easily insert the hidden content.
* Tested with wp 3.6.1

= 1.0.5 =
* Tested with wp 3.6
* Fix: some notices and deprecated function calls.

= 1.0.4 =
* Tested with wp 3.5.2
* Fix: broken link to the documentation.

= 1.0.3 =
* Fix: wrong article ID was inserted i.e. people will like the wrong article.

= 1.0.2 =
* Fix: Added another check in case Like Gate Pro ( http://club.orbisius.com/products/wordpress-plugins/like-gate-pro/ ) was installed
* Fix: The the like gate is called to setup its callbacks on doc ready

= 1.0.1 =
* minor tweaks

= 1.0.0 =
* Added notes about the support forums
* Loading FB JS asynchronously
* Added a Channel File greatly improves the performance of the JS SDK by addressing issues with cross-domain communication in certain browsers.
* Fixed a few bugs
* Added RSS news feeds from http://orbisius.com

= 0.0.9 =
* Updated the script so it plays nicely with Ott's Simple Facebook Connect

= 0.0.8 =
* Remembers what post has been liked and reveals the content if the user comes back
* Added newsletter and donation boxes
* Many fixes and tweaks
* Using jQuery.cookie plugin to remember the liked post

= 0.0.7 =
* Added html namespaces because the like button couldn't be rendered on IE browsers.

= 0.0.6 =
* updated readme
* added some share buttons in the dashboard

= 0.0.5 =
* Added FAQ
* Add fb like box in the dashboard
* Added link and embed code to screencast

= 0.0.4 =
* Can't remember what I released ;)

= 0.0.3 =
* Added TinyMCE button to generate [like-gate] ... [/like-gate] automatically

= 0.0.2 =
* First working version

= 0.0.1 =
* Initial Release
