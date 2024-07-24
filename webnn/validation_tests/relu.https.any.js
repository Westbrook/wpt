// META: title=validation tests for WebNN API relu operation
// META: global=window,dedicatedworker
// META: script=../resources/utils_validation.js

'use strict';

validateInputFromAnotherBuilder('relu');

validateSingleInputOperation('relu', /*alsoBuildActivation=*/ true);
