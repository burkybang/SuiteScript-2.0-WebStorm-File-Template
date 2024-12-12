/**
 * @NApiVersion 2.1
 * @NModuleScope SameAccount
 * @NScriptType RESTlet
 * @see [Help Center (Private)]{@link https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4387799403}
 * @see [Help Center (Public)]{@link https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4387799403.html}
 * @see [File Templates]{@link https://github.com/burkybang/SuiteScript-WebStorm-File-Templates}
 * @see [Type Declarations]{@link https://github.com/burkybang/SuiteScript-2.0-Type-Declarations}
 * @author
 */

import {EntryPoints} from 'N/types';
import * as log from 'N/log';

const get: EntryPoints.RESTlet.get = requestParams => {
  try {
    log.audit('get', requestParams);
  } catch (e) {
    log.error('get', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return {};
};

const post: EntryPoints.RESTlet.post = requestBody => {
  try {
    log.audit('post', requestBody);
  } catch (e) {
    log.error('post', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return {};
};

const put: EntryPoints.RESTlet.put = requestBody => {
  try {
    log.audit('put', requestBody);
  } catch (e) {
    log.error('put', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return {};
};

const delete_: EntryPoints.RESTlet.delete_ = requestParams => {
  try {
    log.audit('delete', requestParams);
  } catch (e) {
    log.error('delete', e.toJSON ? e : (e.stack ? e.stack : e.toString()));
  }
  return {};
};

export {
  // get,
  // post,
  // put,
};

// export {delete_ as delete};