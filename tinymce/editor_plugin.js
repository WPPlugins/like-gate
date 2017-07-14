// Docu : http://wiki.moxiecode.com/index.php/TinyMCE:Create_plugin/3.x#Creating_your_own_plugins
(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('like_gate');
	tinymce.create('tinymce.plugins.like_gate', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');

			ed.addCommand('mcelike_gate', function() {
				ed.windowManager.open({
					file : ajaxurl + '?action=like_gate_ajax_render_popup_content',
					width : 600 + ed.getLang('like_gate.delta_width', 0),
					height : 400 + ed.getLang('like_gate.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url // Plugin absolute URL
				});
			});

			// Register example button
			ed.addButton('like_gate', {
				title : 'Like Gate',
				cmd : 'mcelike_gate',
				image : url + '/../images/icon.png'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			/*ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('like_gate', n.nodeName == 'IMG');
			});*/
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
					longname  : 'Like Gate',
					author 	  : 'Svetoslav Marinov (Slavi)',
					authorurl : 'http://orbisius.com',
					infourl   : 'http://club.orbisius.com/products/wordpress-plugins/like-gate/',
					version   : "1.0.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('like_gate', tinymce.plugins.like_gate);
})();