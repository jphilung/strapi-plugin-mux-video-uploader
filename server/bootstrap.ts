import pluginId from '../admin/src/plugin-id';

export default async ({ strapi }: { strapi: any }) => {

  const actions = [
    // App
    {
      section: 'plugins',
      displayName: 'Read',
      uid: 'read',
      pluginName: pluginId,
    },
    {
      section: 'plugins',
      displayName: 'Create',
      uid: 'create',
      pluginName: pluginId,
    },
    {
      section: 'plugins',
      displayName: 'Update',
      uid: 'update',
      pluginName: pluginId,
    },
    {
      section: 'plugins',
      displayName: 'Delete',
      uid: 'delete',
      pluginName: pluginId,
    },
    // Settings
    {
      section: 'plugins',
      displayName: 'Read',
      subCategory: 'settings',
      uid: 'settings.read',
      pluginName: pluginId,
    },
    {
      section: 'plugins',
      displayName: 'Update',
      subCategory: 'settings',
      uid: 'settings.update',
      pluginName: pluginId,
    },
  ];

  // Commented out as this was causing issues in clustered instances of Strapi
  // Issue was due to multiple instances of the plugin stampeding Mux's API
  // rate limits.  Future work would include a manual invocation from the
  // plugin's settings page.
  // sync();

  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
