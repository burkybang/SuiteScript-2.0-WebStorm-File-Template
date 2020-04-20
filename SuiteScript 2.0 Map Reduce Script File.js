/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MapReduceScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799161.html
 */
define([],
  
  /**
   * @return {{
      getInputData: Function,
      map?: Function,
      reduce?: Function,
      summarize?: Function,
     }}
   */
  function () {
  
    /**
     * @param {GetInputContext} context
     * @return {*[]|Object|Search|GetInputContext|File|Query}
     */
    function getInputData(context) {
      try {
        log.audit('${PROJECT_NAME}', 'getInputData');
      } catch (e) {
        log.error('getInputData', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {MapContext} context - Data collection containing raw key/value pairs
     * @return {void}
     */
    function map(context) {
      try {
        log.audit('${PROJECT_NAME}', 'map');
      } catch (e) {
        log.error('map', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {ReduceContext} context - Data collection containing grouped key/value pairs
     * @return {void}
     */
    function reduce(context) {
      try {
        log.audit('${PROJECT_NAME}', 'reduce');
      } catch (e) {
        log.error('reduce', JSON.parse(JSON.stringify(e)));
      }
    }
    
    /**
     * @param {SummarizeContext} summary - Holds statistics regarding the execution of a map/reduce script
     * @return {void}
     */
    function summarize(summary) {
      try {
        log.audit('${PROJECT_NAME}', 'summarize');
      } catch (e) {
        log.error('summarize', JSON.parse(JSON.stringify(e)));
      }
    }
    
    return {
      getInputData: getInputData,
      map: map,
      reduce: reduce,
      summarize: summarize,
    };
    
  }
);
