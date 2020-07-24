/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType BundleInstallationScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460460309.html
 */
define([],
  
  /**
   * @return {{
   *  beforeInstall?: Function,
   *  afterInstall?: Function,
   *  beforeUpdate?: Function,
   *  afterUpdate?: Function,
   *  beforeUninstall?: Function,
   * }}
   */
  () => {
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being installed
     * @return {void}
     */
    const beforeInstall = params => {
      try {
        log.audit('beforeInstall', params);
      } catch (e) {
        log.error('beforeInstall', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that was just installed
     * @return {void}
     */
    const afterInstall = params => {
      try {
        log.audit('afterInstall', params);
      } catch (e) {
        log.error('afterInstall', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that is currently installed
     * @param {number} params.toVersion - The version of the bundle that is being installed
     * @return {void}
     */
    const beforeUpdate = params => {
      try {
        log.audit('beforeUpdate', params);
      } catch (e) {
        log.error('beforeUpdate', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that was previously installed
     * @param {number} params.toVersion - The version of the bundle that was just installed
     * @return {void}
     */
    const afterUpdate = params => {
      try {
        log.audit('afterUpdate', params);
      } catch (e) {
        log.error('afterUpdate', JSON.parse(JSON.stringify(e)));
      }
    };
    
    /**
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being uninstalled
     * @return {void}
     */
    const beforeUninstall = params => {
      try {
        log.audit('beforeUninstall', params);
      } catch (e) {
        log.error('beforeUninstall', JSON.parse(JSON.stringify(e)));
      }
    };
    
    return {
      // beforeInstall,
      // afterInstall,
      // beforeUpdate,
      // afterUpdate,
      // beforeUninstall,
    };
    
  }
);
