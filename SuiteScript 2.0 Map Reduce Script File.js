/**
 * @NApiVersion 2.x
 * @NModuleScope SameAccount
 * @NScriptType MapReduceScript
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799161.html
 */
define([],
  
  /**
   * @returns {{
      getInputData: function(InputContext),
      map?: function(MapContext),
      reduce?: function(ReduceContext)
      summarize?: function(SummarizeContext)
     }}
   */
  function () {
  
    /**
     * getInputData event handler
     * @param {InputContext} context
     * @returns {*[]|Object|Search|InputContext|File|Query}
     */
    function getInputData(context) {
      try {
        log.audit('${PROJECT_NAME}', 'getInputData');
      } catch (e) {
        log.error('getInputData', e);
      }
    }
    
    /**
     * map event handler
     * @param {MapContext} context - Data collection containing raw key/value pairs
     * @returns {void}
     */
    function map(context) {
      try {
        log.audit('${PROJECT_NAME}', 'map');
      } catch (e) {
        log.error('map', e);
      }
    }
    
    /**
     * reduce event handler
     * @param {ReduceContext} context - Data collection containing grouped key/value pairs
     * @returns {void}
     */
    function reduce(context) {
      try {
        log.audit('${PROJECT_NAME}', 'reduce');
      } catch (e) {
        log.error('reduce', e);
      }
    }
    
    /**
     * summarize event handler
     * @param {SummarizeContext} summary - Holds statistics regarding the execution of a map/reduce script
     * @returns {void}
     */
    function summarize(summary) {
      try {
        log.audit('${PROJECT_NAME}', 'summarize');
      } catch (e) {
        log.error('summarize', e);
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
