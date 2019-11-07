/**
 #if ($Description != '')
 * $Description
 #else
 * Write a description
 #end
 *
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType BundleInstallationScript
 * @see [NetSuite Help: Bundle Installation Script Type]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4460460309.html}
 */
define([],
  
  function () {
  
    /**
     * beforeInstall event handler
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being installed
     * @return {void}
     */
    function beforeInstall(params) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeInstall');
      } catch (e) {
        log.error('beforeInstall', JSON.stringify(e));
      }
    }
    
    /**
     * afterInstall event handler
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that was just installed
     * @return {void}
     */
    function afterInstall(params) {
      try {
        log.audit('${PROJECT_NAME}', 'afterInstall');
      } catch (e) {
        log.error('afterInstall', JSON.stringify(e));
      }
    }
  
    /**
     * beforeUpdate event handler
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that is currently installed
     * @param {number} params.toVersion - The version of the bundle that is being installed
     * @return {void}
     */
    function beforeUpdate(params) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeUpdate');
      } catch (e) {
        log.error('beforeUpdate', JSON.stringify(e));
      }
    }
    
    /**
     * afterUpdate event handler
     * @param {Object} params
     * @param {number} params.fromVersion - The version of the bundle that was previously installed
     * @param {number} params.toVersion - The version of the bundle that was just installed
     * @return {void}
     */
    function afterUpdate(params) {
      try {
        log.audit('${PROJECT_NAME}', 'afterUpdate');
      } catch (e) {
        log.error('afterUpdate', JSON.stringify(e));
      }
    }
  
    /**
     * beforeUninstall event handler
     * @param {Object} params
     * @param {number} params.version - The version of the bundle that is being uninstalled
     * @return {void}
     */
    function beforeUninstall(params) {
      try {
        log.audit('${PROJECT_NAME}', 'beforeUninstall');
      } catch (e) {
        log.error('beforeUninstall', JSON.stringify(e));
      }
    }
    
    return {
      // beforeInstall: beforeInstall,
      // afterInstall: afterInstall,
      // beforeUpdate: beforeUpdate,
      // afterUpdate: afterUpdate,
      // beforeUninstall: beforeUninstall,
    };
    
  }
);
