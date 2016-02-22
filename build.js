"bundle";
System.registerDynamic("github:knockout/knockout@3.4.0/dist/knockout.debug.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, "ko", null);
  (function() {
    "format global";
    "exports ko";
    (function() {
      var DEBUG = true;
      (function(undefined) {
        var window = this || (0, eval)('this'),
            document = window['document'],
            navigator = window['navigator'],
            jQueryInstance = window["jQuery"],
            JSON = window["JSON"];
        (function(factory) {
          if (typeof define === 'function' && define['amd']) {
            define(['exports', 'require'], factory);
          } else if (typeof exports === 'object' && typeof module === 'object') {
            factory(module['exports'] || exports);
          } else {
            factory(window['ko'] = {});
          }
        }(function(koExports, amdRequire) {
          var ko = typeof koExports !== 'undefined' ? koExports : {};
          ko.exportSymbol = function(koPath, object) {
            var tokens = koPath.split(".");
            var target = ko;
            for (var i = 0; i < tokens.length - 1; i++)
              target = target[tokens[i]];
            target[tokens[tokens.length - 1]] = object;
          };
          ko.exportProperty = function(owner, publicName, object) {
            owner[publicName] = object;
          };
          ko.version = "3.4.0";
          ko.exportSymbol('version', ko.version);
          ko.options = {
            'deferUpdates': false,
            'useOnlyNativeEvents': false
          };
          ko.utils = (function() {
            function objectForEach(obj, action) {
              for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                  action(prop, obj[prop]);
                }
              }
            }
            function extend(target, source) {
              if (source) {
                for (var prop in source) {
                  if (source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                  }
                }
              }
              return target;
            }
            function setPrototypeOf(obj, proto) {
              obj.__proto__ = proto;
              return obj;
            }
            var canSetPrototype = ({__proto__: []} instanceof Array);
            var canUseSymbols = !DEBUG && typeof Symbol === 'function';
            var knownEvents = {},
                knownEventTypesByEventName = {};
            var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
            knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
            knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
            objectForEach(knownEvents, function(eventType, knownEventsForType) {
              if (knownEventsForType.length) {
                for (var i = 0,
                    j = knownEventsForType.length; i < j; i++)
                  knownEventTypesByEventName[knownEventsForType[i]] = eventType;
              }
            });
            var eventsThatMustBeRegisteredUsingAttachEvent = {'propertychange': true};
            var ieVersion = document && (function() {
              var version = 3,
                  div = document.createElement('div'),
                  iElems = div.getElementsByTagName('i');
              while (div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->', iElems[0]) {}
              return version > 4 ? version : undefined;
            }());
            var isIe6 = ieVersion === 6,
                isIe7 = ieVersion === 7;
            function isClickOnCheckableElement(element, eventType) {
              if ((ko.utils.tagNameLower(element) !== "input") || !element.type)
                return false;
              if (eventType.toLowerCase() != "click")
                return false;
              var inputType = element.type;
              return (inputType == "checkbox") || (inputType == "radio");
            }
            var cssClassNameRegex = /\S+/g;
            function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
              var addOrRemoveFn;
              if (classNames) {
                if (typeof node.classList === 'object') {
                  addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                  ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    addOrRemoveFn.call(node.classList, className);
                  });
                } else if (typeof node.className['baseVal'] === 'string') {
                  toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
                } else {
                  toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
                }
              }
            }
            function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
              var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
              ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
              });
              obj[prop] = currentClassNames.join(" ");
            }
            return {
              fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],
              arrayForEach: function(array, action) {
                for (var i = 0,
                    j = array.length; i < j; i++)
                  action(array[i], i);
              },
              arrayIndexOf: function(array, item) {
                if (typeof Array.prototype.indexOf == "function")
                  return Array.prototype.indexOf.call(array, item);
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (array[i] === item)
                    return i;
                return -1;
              },
              arrayFirst: function(array, predicate, predicateOwner) {
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (predicate.call(predicateOwner, array[i], i))
                    return array[i];
                return null;
              },
              arrayRemoveItem: function(array, itemToRemove) {
                var index = ko.utils.arrayIndexOf(array, itemToRemove);
                if (index > 0) {
                  array.splice(index, 1);
                } else if (index === 0) {
                  array.shift();
                }
              },
              arrayGetDistinctValues: function(array) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++) {
                  if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
                }
                return result;
              },
              arrayMap: function(array, mapping) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++)
                  result.push(mapping(array[i], i));
                return result;
              },
              arrayFilter: function(array, predicate) {
                array = array || [];
                var result = [];
                for (var i = 0,
                    j = array.length; i < j; i++)
                  if (predicate(array[i], i))
                    result.push(array[i]);
                return result;
              },
              arrayPushAll: function(array, valuesToPush) {
                if (valuesToPush instanceof Array)
                  array.push.apply(array, valuesToPush);
                else
                  for (var i = 0,
                      j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
                return array;
              },
              addOrRemoveItem: function(array, value, included) {
                var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
                if (existingEntryIndex < 0) {
                  if (included)
                    array.push(value);
                } else {
                  if (!included)
                    array.splice(existingEntryIndex, 1);
                }
              },
              canSetPrototype: canSetPrototype,
              extend: extend,
              setPrototypeOf: setPrototypeOf,
              setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,
              objectForEach: objectForEach,
              objectMap: function(source, mapping) {
                if (!source)
                  return source;
                var target = {};
                for (var prop in source) {
                  if (source.hasOwnProperty(prop)) {
                    target[prop] = mapping(source[prop], prop, source);
                  }
                }
                return target;
              },
              emptyDomNode: function(domNode) {
                while (domNode.firstChild) {
                  ko.removeNode(domNode.firstChild);
                }
              },
              moveCleanedNodesToContainerElement: function(nodes) {
                var nodesArray = ko.utils.makeArray(nodes);
                var templateDocument = (nodesArray[0] && nodesArray[0].ownerDocument) || document;
                var container = templateDocument.createElement('div');
                for (var i = 0,
                    j = nodesArray.length; i < j; i++) {
                  container.appendChild(ko.cleanNode(nodesArray[i]));
                }
                return container;
              },
              cloneNodes: function(nodesArray, shouldCleanNodes) {
                for (var i = 0,
                    j = nodesArray.length,
                    newNodesArray = []; i < j; i++) {
                  var clonedNode = nodesArray[i].cloneNode(true);
                  newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                }
                return newNodesArray;
              },
              setDomNodeChildren: function(domNode, childNodes) {
                ko.utils.emptyDomNode(domNode);
                if (childNodes) {
                  for (var i = 0,
                      j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
                }
              },
              replaceDomNodes: function(nodeToReplaceOrNodeArray, newNodesArray) {
                var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
                if (nodesToReplaceArray.length > 0) {
                  var insertionPoint = nodesToReplaceArray[0];
                  var parent = insertionPoint.parentNode;
                  for (var i = 0,
                      j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                  for (var i = 0,
                      j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                  }
                }
              },
              fixUpContinuousNodeArray: function(continuousNodeArray, parentNode) {
                if (continuousNodeArray.length) {
                  parentNode = (parentNode.nodeType === 8 && parentNode.parentNode) || parentNode;
                  while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode)
                    continuousNodeArray.splice(0, 1);
                  while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode)
                    continuousNodeArray.length--;
                  if (continuousNodeArray.length > 1) {
                    var current = continuousNodeArray[0],
                        last = continuousNodeArray[continuousNodeArray.length - 1];
                    continuousNodeArray.length = 0;
                    while (current !== last) {
                      continuousNodeArray.push(current);
                      current = current.nextSibling;
                    }
                    continuousNodeArray.push(last);
                  }
                }
                return continuousNodeArray;
              },
              setOptionNodeSelectionState: function(optionNode, isSelected) {
                if (ieVersion < 7)
                  optionNode.setAttribute("selected", isSelected);
                else
                  optionNode.selected = isSelected;
              },
              stringTrim: function(string) {
                return string === null || string === undefined ? '' : string.trim ? string.trim() : string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
              },
              stringStartsWith: function(string, startsWith) {
                string = string || "";
                if (startsWith.length > string.length)
                  return false;
                return string.substring(0, startsWith.length) === startsWith;
              },
              domNodeIsContainedBy: function(node, containedByNode) {
                if (node === containedByNode)
                  return true;
                if (node.nodeType === 11)
                  return false;
                if (containedByNode.contains)
                  return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
                if (containedByNode.compareDocumentPosition)
                  return (containedByNode.compareDocumentPosition(node) & 16) == 16;
                while (node && node != containedByNode) {
                  node = node.parentNode;
                }
                return !!node;
              },
              domNodeIsAttachedToDocument: function(node) {
                return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
              },
              anyDomNodeIsAttachedToDocument: function(nodes) {
                return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
              },
              tagNameLower: function(element) {
                return element && element.tagName && element.tagName.toLowerCase();
              },
              catchFunctionErrors: function(delegate) {
                return ko['onError'] ? function() {
                  try {
                    return delegate.apply(this, arguments);
                  } catch (e) {
                    ko['onError'] && ko['onError'](e);
                    throw e;
                  }
                } : delegate;
              },
              setTimeout: function(handler, timeout) {
                return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
              },
              deferError: function(error) {
                setTimeout(function() {
                  ko['onError'] && ko['onError'](error);
                  throw error;
                }, 0);
              },
              registerEventHandler: function(element, eventType, handler) {
                var wrappedHandler = ko.utils.catchFunctionErrors(handler);
                var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
                if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
                  jQueryInstance(element)['bind'](eventType, wrappedHandler);
                } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                  element.addEventListener(eventType, wrappedHandler, false);
                else if (typeof element.attachEvent != "undefined") {
                  var attachEventHandler = function(event) {
                    wrappedHandler.call(element, event);
                  },
                      attachEventName = "on" + eventType;
                  element.attachEvent(attachEventName, attachEventHandler);
                  ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                  });
                } else
                  throw new Error("Browser doesn't support addEventListener or attachEvent");
              },
              triggerEvent: function(element, eventType) {
                if (!(element && element.nodeType))
                  throw new Error("element must be a DOM node when calling triggerEvent");
                var useClickWorkaround = isClickOnCheckableElement(element, eventType);
                if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
                  jQueryInstance(element)['trigger'](eventType);
                } else if (typeof document.createEvent == "function") {
                  if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                  } else
                    throw new Error("The supplied element doesn't support dispatchEvent");
                } else if (useClickWorkaround && element.click) {
                  element.click();
                } else if (typeof element.fireEvent != "undefined") {
                  element.fireEvent("on" + eventType);
                } else {
                  throw new Error("Browser doesn't support triggering events");
                }
              },
              unwrapObservable: function(value) {
                return ko.isObservable(value) ? value() : value;
              },
              peekObservable: function(value) {
                return ko.isObservable(value) ? value.peek() : value;
              },
              toggleDomNodeCssClass: toggleDomNodeCssClass,
              setTextContent: function(element, textContent) {
                var value = ko.utils.unwrapObservable(textContent);
                if ((value === null) || (value === undefined))
                  value = "";
                var innerTextNode = ko.virtualElements.firstChild(element);
                if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                  ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
                } else {
                  innerTextNode.data = value;
                }
                ko.utils.forceRefresh(element);
              },
              setElementName: function(element, name) {
                element.name = name;
                if (ieVersion <= 7) {
                  try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                  } catch (e) {}
                }
              },
              forceRefresh: function(node) {
                if (ieVersion >= 9) {
                  var elem = node.nodeType == 1 ? node : node.parentNode;
                  if (elem.style)
                    elem.style.zoom = elem.style.zoom;
                }
              },
              ensureSelectElementIsRenderedCorrectly: function(selectElement) {
                if (ieVersion) {
                  var originalWidth = selectElement.style.width;
                  selectElement.style.width = 0;
                  selectElement.style.width = originalWidth;
                }
              },
              range: function(min, max) {
                min = ko.utils.unwrapObservable(min);
                max = ko.utils.unwrapObservable(max);
                var result = [];
                for (var i = min; i <= max; i++)
                  result.push(i);
                return result;
              },
              makeArray: function(arrayLikeObject) {
                var result = [];
                for (var i = 0,
                    j = arrayLikeObject.length; i < j; i++) {
                  result.push(arrayLikeObject[i]);
                }
                ;
                return result;
              },
              createSymbolOrString: function(identifier) {
                return canUseSymbols ? Symbol(identifier) : identifier;
              },
              isIe6: isIe6,
              isIe7: isIe7,
              ieVersion: ieVersion,
              getFormFields: function(form, fieldName) {
                var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
                var isMatchingField = (typeof fieldName == 'string') ? function(field) {
                  return field.name === fieldName;
                } : function(field) {
                  return fieldName.test(field.name);
                };
                var matches = [];
                for (var i = fields.length - 1; i >= 0; i--) {
                  if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
                }
                ;
                return matches;
              },
              parseJson: function(jsonString) {
                if (typeof jsonString == "string") {
                  jsonString = ko.utils.stringTrim(jsonString);
                  if (jsonString) {
                    if (JSON && JSON.parse)
                      return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))();
                  }
                }
                return null;
              },
              stringifyJson: function(data, replacer, space) {
                if (!JSON || !JSON.stringify)
                  throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
              },
              postJson: function(urlOrForm, data, options) {
                options = options || {};
                var params = options['params'] || {};
                var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
                var url = urlOrForm;
                if ((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                  var originalForm = urlOrForm;
                  url = originalForm.action;
                  for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                      params[fields[j].name] = fields[j].value;
                  }
                }
                data = ko.utils.unwrapObservable(data);
                var form = document.createElement("form");
                form.style.display = "none";
                form.action = url;
                form.method = "post";
                for (var key in data) {
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = key;
                  input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                  form.appendChild(input);
                }
                objectForEach(params, function(key, value) {
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = key;
                  input.value = value;
                  form.appendChild(input);
                });
                document.body.appendChild(form);
                options['submitter'] ? options['submitter'](form) : form.submit();
                setTimeout(function() {
                  form.parentNode.removeChild(form);
                }, 0);
              }
            };
          }());
          ko.exportSymbol('utils', ko.utils);
          ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
          ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
          ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
          ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
          ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
          ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
          ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
          ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
          ko.exportSymbol('utils.extend', ko.utils.extend);
          ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
          ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
          ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
          ko.exportSymbol('utils.postJson', ko.utils.postJson);
          ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
          ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
          ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
          ko.exportSymbol('utils.range', ko.utils.range);
          ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
          ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
          ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
          ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
          ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
          ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
          ko.exportSymbol('unwrap', ko.utils.unwrapObservable);
          if (!Function.prototype['bind']) {
            Function.prototype['bind'] = function(object) {
              var originalFunction = this;
              if (arguments.length === 1) {
                return function() {
                  return originalFunction.apply(object, arguments);
                };
              } else {
                var partialArgs = Array.prototype.slice.call(arguments, 1);
                return function() {
                  var args = partialArgs.slice(0);
                  args.push.apply(args, arguments);
                  return originalFunction.apply(object, args);
                };
              }
            };
          }
          ko.utils.domData = new (function() {
            var uniqueId = 0;
            var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
            var dataStore = {};
            function getAll(node, createIfNotFound) {
              var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
              var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
              if (!hasExistingDataStore) {
                if (!createIfNotFound)
                  return undefined;
                dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                dataStore[dataStoreKey] = {};
              }
              return dataStore[dataStoreKey];
            }
            return {
              get: function(node, key) {
                var allDataForNode = getAll(node, false);
                return allDataForNode === undefined ? undefined : allDataForNode[key];
              },
              set: function(node, key, value) {
                if (value === undefined) {
                  if (getAll(node, false) === undefined)
                    return;
                }
                var allDataForNode = getAll(node, true);
                allDataForNode[key] = value;
              },
              clear: function(node) {
                var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                if (dataStoreKey) {
                  delete dataStore[dataStoreKey];
                  node[dataStoreKeyExpandoPropertyName] = null;
                  return true;
                }
                return false;
              },
              nextKey: function() {
                return (uniqueId++) + dataStoreKeyExpandoPropertyName;
              }
            };
          })();
          ko.exportSymbol('utils.domData', ko.utils.domData);
          ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear);
          ko.utils.domNodeDisposal = new (function() {
            var domDataKey = ko.utils.domData.nextKey();
            var cleanableNodeTypes = {
              1: true,
              8: true,
              9: true
            };
            var cleanableNodeTypesWithDescendants = {
              1: true,
              9: true
            };
            function getDisposeCallbacksCollection(node, createIfNotFound) {
              var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
              if ((allDisposeCallbacks === undefined) && createIfNotFound) {
                allDisposeCallbacks = [];
                ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
              }
              return allDisposeCallbacks;
            }
            function destroyCallbacksCollection(node) {
              ko.utils.domData.set(node, domDataKey, undefined);
            }
            function cleanSingleNode(node) {
              var callbacks = getDisposeCallbacksCollection(node, false);
              if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0; i < callbacks.length; i++)
                  callbacks[i](node);
              }
              ko.utils.domData.clear(node);
              ko.utils.domNodeDisposal["cleanExternalData"](node);
              if (cleanableNodeTypesWithDescendants[node.nodeType])
                cleanImmediateCommentTypeChildren(node);
            }
            function cleanImmediateCommentTypeChildren(nodeWithChildren) {
              var child,
                  nextChild = nodeWithChildren.firstChild;
              while (child = nextChild) {
                nextChild = child.nextSibling;
                if (child.nodeType === 8)
                  cleanSingleNode(child);
              }
            }
            return {
              addDisposeCallback: function(node, callback) {
                if (typeof callback != "function")
                  throw new Error("Callback must be a function");
                getDisposeCallbacksCollection(node, true).push(callback);
              },
              removeDisposeCallback: function(node, callback) {
                var callbacksCollection = getDisposeCallbacksCollection(node, false);
                if (callbacksCollection) {
                  ko.utils.arrayRemoveItem(callbacksCollection, callback);
                  if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
                }
              },
              cleanNode: function(node) {
                if (cleanableNodeTypes[node.nodeType]) {
                  cleanSingleNode(node);
                  if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0,
                        j = descendants.length; i < j; i++)
                      cleanSingleNode(descendants[i]);
                  }
                }
                return node;
              },
              removeNode: function(node) {
                ko.cleanNode(node);
                if (node.parentNode)
                  node.parentNode.removeChild(node);
              },
              "cleanExternalData": function(node) {
                if (jQueryInstance && (typeof jQueryInstance['cleanData'] == "function"))
                  jQueryInstance['cleanData']([node]);
              }
            };
          })();
          ko.cleanNode = ko.utils.domNodeDisposal.cleanNode;
          ko.removeNode = ko.utils.domNodeDisposal.removeNode;
          ko.exportSymbol('cleanNode', ko.cleanNode);
          ko.exportSymbol('removeNode', ko.removeNode);
          ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
          ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
          ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
          (function() {
            var none = [0, "", ""],
                table = [1, "<table>", "</table>"],
                tbody = [2, "<table><tbody>", "</tbody></table>"],
                tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                select = [1, "<select multiple='multiple'>", "</select>"],
                lookup = {
                  'thead': table,
                  'tbody': table,
                  'tfoot': table,
                  'tr': tbody,
                  'td': tr,
                  'th': tr,
                  'option': select,
                  'optgroup': select
                },
                mayRequireCreateElementHack = ko.utils.ieVersion <= 8;
            function getWrap(tags) {
              var m = tags.match(/^<([a-z]+)[ >]/);
              return (m && lookup[m[1]]) || none;
            }
            function simpleHtmlParse(html, documentContext) {
              documentContext || (documentContext = document);
              var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;
              var tags = ko.utils.stringTrim(html).toLowerCase(),
                  div = documentContext.createElement("div"),
                  wrap = getWrap(tags),
                  depth = wrap[0];
              var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
              if (typeof windowContext['innerShiv'] == "function") {
                div.appendChild(windowContext['innerShiv'](markup));
              } else {
                if (mayRequireCreateElementHack) {
                  documentContext.appendChild(div);
                }
                div.innerHTML = markup;
                if (mayRequireCreateElementHack) {
                  div.parentNode.removeChild(div);
                }
              }
              while (depth--)
                div = div.lastChild;
              return ko.utils.makeArray(div.lastChild.childNodes);
            }
            function jQueryHtmlParse(html, documentContext) {
              if (jQueryInstance['parseHTML']) {
                return jQueryInstance['parseHTML'](html, documentContext) || [];
              } else {
                var elems = jQueryInstance['clean']([html], documentContext);
                if (elems && elems[0]) {
                  var elem = elems[0];
                  while (elem.parentNode && elem.parentNode.nodeType !== 11)
                    elem = elem.parentNode;
                  if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
                }
                return elems;
              }
            }
            ko.utils.parseHtmlFragment = function(html, documentContext) {
              return jQueryInstance ? jQueryHtmlParse(html, documentContext) : simpleHtmlParse(html, documentContext);
            };
            ko.utils.setHtml = function(node, html) {
              ko.utils.emptyDomNode(node);
              html = ko.utils.unwrapObservable(html);
              if ((html !== null) && (html !== undefined)) {
                if (typeof html != 'string')
                  html = html.toString();
                if (jQueryInstance) {
                  jQueryInstance(node)['html'](html);
                } else {
                  var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                  for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
                }
              }
            };
          })();
          ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
          ko.exportSymbol('utils.setHtml', ko.utils.setHtml);
          ko.memoization = (function() {
            var memos = {};
            function randomMax8HexChars() {
              return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
            }
            function generateRandomId() {
              return randomMax8HexChars() + randomMax8HexChars();
            }
            function findMemoNodes(rootNode, appendToArray) {
              if (!rootNode)
                return;
              if (rootNode.nodeType == 8) {
                var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
                if (memoId != null)
                  appendToArray.push({
                    domNode: rootNode,
                    memoId: memoId
                  });
              } else if (rootNode.nodeType == 1) {
                for (var i = 0,
                    childNodes = rootNode.childNodes,
                    j = childNodes.length; i < j; i++)
                  findMemoNodes(childNodes[i], appendToArray);
              }
            }
            return {
              memoize: function(callback) {
                if (typeof callback != "function")
                  throw new Error("You can only pass a function to ko.memoization.memoize()");
                var memoId = generateRandomId();
                memos[memoId] = callback;
                return "<!--[ko_memo:" + memoId + "]-->";
              },
              unmemoize: function(memoId, callbackParams) {
                var callback = memos[memoId];
                if (callback === undefined)
                  throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
                try {
                  callback.apply(null, callbackParams || []);
                  return true;
                } finally {
                  delete memos[memoId];
                }
              },
              unmemoizeDomNodeAndDescendants: function(domNode, extraCallbackParamsArray) {
                var memos = [];
                findMemoNodes(domNode, memos);
                for (var i = 0,
                    j = memos.length; i < j; i++) {
                  var node = memos[i].domNode;
                  var combinedParams = [node];
                  if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                  ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                  node.nodeValue = "";
                  if (node.parentNode)
                    node.parentNode.removeChild(node);
                }
              },
              parseMemoText: function(memoText) {
                var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
                return match ? match[1] : null;
              }
            };
          })();
          ko.exportSymbol('memoization', ko.memoization);
          ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
          ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
          ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
          ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
          ko.tasks = (function() {
            var scheduler,
                taskQueue = [],
                taskQueueLength = 0,
                nextHandle = 1,
                nextIndexToProcess = 0;
            if (window['MutationObserver']) {
              scheduler = (function(callback) {
                var div = document.createElement("div");
                new MutationObserver(callback).observe(div, {attributes: true});
                return function() {
                  div.classList.toggle("foo");
                };
              })(scheduledProcess);
            } else if (document && "onreadystatechange" in document.createElement("script")) {
              scheduler = function(callback) {
                var script = document.createElement("script");
                script.onreadystatechange = function() {
                  script.onreadystatechange = null;
                  document.documentElement.removeChild(script);
                  script = null;
                  callback();
                };
                document.documentElement.appendChild(script);
              };
            } else {
              scheduler = function(callback) {
                setTimeout(callback, 0);
              };
            }
            function processTasks() {
              if (taskQueueLength) {
                var mark = taskQueueLength,
                    countMarks = 0;
                for (var task; nextIndexToProcess < taskQueueLength; ) {
                  if (task = taskQueue[nextIndexToProcess++]) {
                    if (nextIndexToProcess > mark) {
                      if (++countMarks >= 5000) {
                        nextIndexToProcess = taskQueueLength;
                        ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
                        break;
                      }
                      mark = taskQueueLength;
                    }
                    try {
                      task();
                    } catch (ex) {
                      ko.utils.deferError(ex);
                    }
                  }
                }
              }
            }
            function scheduledProcess() {
              processTasks();
              nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
            }
            function scheduleTaskProcessing() {
              ko.tasks['scheduler'](scheduledProcess);
            }
            var tasks = {
              'scheduler': scheduler,
              schedule: function(func) {
                if (!taskQueueLength) {
                  scheduleTaskProcessing();
                }
                taskQueue[taskQueueLength++] = func;
                return nextHandle++;
              },
              cancel: function(handle) {
                var index = handle - (nextHandle - taskQueueLength);
                if (index >= nextIndexToProcess && index < taskQueueLength) {
                  taskQueue[index] = null;
                }
              },
              'resetForTesting': function() {
                var length = taskQueueLength - nextIndexToProcess;
                nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
                return length;
              },
              runEarly: processTasks
            };
            return tasks;
          })();
          ko.exportSymbol('tasks', ko.tasks);
          ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
          ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
          ko.extenders = {
            'throttle': function(target, timeout) {
              target['throttleEvaluation'] = timeout;
              var writeTimeoutInstance = null;
              return ko.dependentObservable({
                'read': target,
                'write': function(value) {
                  clearTimeout(writeTimeoutInstance);
                  writeTimeoutInstance = ko.utils.setTimeout(function() {
                    target(value);
                  }, timeout);
                }
              });
            },
            'rateLimit': function(target, options) {
              var timeout,
                  method,
                  limitFunction;
              if (typeof options == 'number') {
                timeout = options;
              } else {
                timeout = options['timeout'];
                method = options['method'];
              }
              target._deferUpdates = false;
              limitFunction = method == 'notifyWhenChangesStop' ? debounce : throttle;
              target.limit(function(callback) {
                return limitFunction(callback, timeout);
              });
            },
            'deferred': function(target, options) {
              if (options !== true) {
                throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.');
              }
              if (!target._deferUpdates) {
                target._deferUpdates = true;
                target.limit(function(callback) {
                  var handle;
                  return function() {
                    ko.tasks.cancel(handle);
                    handle = ko.tasks.schedule(callback);
                    target['notifySubscribers'](undefined, 'dirty');
                  };
                });
              }
            },
            'notify': function(target, notifyWhen) {
              target["equalityComparer"] = notifyWhen == "always" ? null : valuesArePrimitiveAndEqual;
            }
          };
          var primitiveTypes = {
            'undefined': 1,
            'boolean': 1,
            'number': 1,
            'string': 1
          };
          function valuesArePrimitiveAndEqual(a, b) {
            var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
            return oldValueIsPrimitive ? (a === b) : false;
          }
          function throttle(callback, timeout) {
            var timeoutInstance;
            return function() {
              if (!timeoutInstance) {
                timeoutInstance = ko.utils.setTimeout(function() {
                  timeoutInstance = undefined;
                  callback();
                }, timeout);
              }
            };
          }
          function debounce(callback, timeout) {
            var timeoutInstance;
            return function() {
              clearTimeout(timeoutInstance);
              timeoutInstance = ko.utils.setTimeout(callback, timeout);
            };
          }
          function applyExtenders(requestedExtenders) {
            var target = this;
            if (requestedExtenders) {
              ko.utils.objectForEach(requestedExtenders, function(key, value) {
                var extenderHandler = ko.extenders[key];
                if (typeof extenderHandler == 'function') {
                  target = extenderHandler(target, value) || target;
                }
              });
            }
            return target;
          }
          ko.exportSymbol('extenders', ko.extenders);
          ko.subscription = function(target, callback, disposeCallback) {
            this._target = target;
            this.callback = callback;
            this.disposeCallback = disposeCallback;
            this.isDisposed = false;
            ko.exportProperty(this, 'dispose', this.dispose);
          };
          ko.subscription.prototype.dispose = function() {
            this.isDisposed = true;
            this.disposeCallback();
          };
          ko.subscribable = function() {
            ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
            ko_subscribable_fn.init(this);
          };
          var defaultEvent = "change";
          function limitNotifySubscribers(value, event) {
            if (!event || event === defaultEvent) {
              this._limitChange(value);
            } else if (event === 'beforeChange') {
              this._limitBeforeChange(value);
            } else {
              this._origNotifySubscribers(value, event);
            }
          }
          var ko_subscribable_fn = {
            init: function(instance) {
              instance._subscriptions = {};
              instance._versionNumber = 1;
            },
            subscribe: function(callback, callbackTarget, event) {
              var self = this;
              event = event || defaultEvent;
              var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;
              var subscription = new ko.subscription(self, boundCallback, function() {
                ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
                if (self.afterSubscriptionRemove)
                  self.afterSubscriptionRemove(event);
              });
              if (self.beforeSubscriptionAdd)
                self.beforeSubscriptionAdd(event);
              if (!self._subscriptions[event])
                self._subscriptions[event] = [];
              self._subscriptions[event].push(subscription);
              return subscription;
            },
            "notifySubscribers": function(valueToNotify, event) {
              event = event || defaultEvent;
              if (event === defaultEvent) {
                this.updateVersion();
              }
              if (this.hasSubscriptionsForEvent(event)) {
                try {
                  ko.dependencyDetection.begin();
                  for (var a = this._subscriptions[event].slice(0),
                      i = 0,
                      subscription; subscription = a[i]; ++i) {
                    if (!subscription.isDisposed)
                      subscription.callback(valueToNotify);
                  }
                } finally {
                  ko.dependencyDetection.end();
                }
              }
            },
            getVersion: function() {
              return this._versionNumber;
            },
            hasChanged: function(versionToCheck) {
              return this.getVersion() !== versionToCheck;
            },
            updateVersion: function() {
              ++this._versionNumber;
            },
            limit: function(limitFunction) {
              var self = this,
                  selfIsObservable = ko.isObservable(self),
                  ignoreBeforeChange,
                  previousValue,
                  pendingValue,
                  beforeChange = 'beforeChange';
              if (!self._origNotifySubscribers) {
                self._origNotifySubscribers = self["notifySubscribers"];
                self["notifySubscribers"] = limitNotifySubscribers;
              }
              var finish = limitFunction(function() {
                self._notificationIsPending = false;
                if (selfIsObservable && pendingValue === self) {
                  pendingValue = self();
                }
                ignoreBeforeChange = false;
                if (self.isDifferent(previousValue, pendingValue)) {
                  self._origNotifySubscribers(previousValue = pendingValue);
                }
              });
              self._limitChange = function(value) {
                self._notificationIsPending = ignoreBeforeChange = true;
                pendingValue = value;
                finish();
              };
              self._limitBeforeChange = function(value) {
                if (!ignoreBeforeChange) {
                  previousValue = value;
                  self._origNotifySubscribers(value, beforeChange);
                }
              };
            },
            hasSubscriptionsForEvent: function(event) {
              return this._subscriptions[event] && this._subscriptions[event].length;
            },
            getSubscriptionsCount: function(event) {
              if (event) {
                return this._subscriptions[event] && this._subscriptions[event].length || 0;
              } else {
                var total = 0;
                ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
                  if (eventName !== 'dirty')
                    total += subscriptions.length;
                });
                return total;
              }
            },
            isDifferent: function(oldValue, newValue) {
              return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
            },
            extend: applyExtenders
          };
          ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
          ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
          ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
          }
          ko.subscribable['fn'] = ko_subscribable_fn;
          ko.isSubscribable = function(instance) {
            return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
          };
          ko.exportSymbol('subscribable', ko.subscribable);
          ko.exportSymbol('isSubscribable', ko.isSubscribable);
          ko.computedContext = ko.dependencyDetection = (function() {
            var outerFrames = [],
                currentFrame,
                lastId = 0;
            function getId() {
              return ++lastId;
            }
            function begin(options) {
              outerFrames.push(currentFrame);
              currentFrame = options;
            }
            function end() {
              currentFrame = outerFrames.pop();
            }
            return {
              begin: begin,
              end: end,
              registerDependency: function(subscribable) {
                if (currentFrame) {
                  if (!ko.isSubscribable(subscribable))
                    throw new Error("Only subscribable things can act as dependencies");
                  currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
                }
              },
              ignore: function(callback, callbackTarget, callbackArgs) {
                try {
                  begin();
                  return callback.apply(callbackTarget, callbackArgs || []);
                } finally {
                  end();
                }
              },
              getDependenciesCount: function() {
                if (currentFrame)
                  return currentFrame.computed.getDependenciesCount();
              },
              isInitial: function() {
                if (currentFrame)
                  return currentFrame.isInitial;
              }
            };
          })();
          ko.exportSymbol('computedContext', ko.computedContext);
          ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
          ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);
          ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
          var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');
          ko.observable = function(initialValue) {
            function observable() {
              if (arguments.length > 0) {
                if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
                  observable.valueWillMutate();
                  observable[observableLatestValue] = arguments[0];
                  observable.valueHasMutated();
                }
                return this;
              } else {
                ko.dependencyDetection.registerDependency(observable);
                return observable[observableLatestValue];
              }
            }
            observable[observableLatestValue] = initialValue;
            if (!ko.utils.canSetPrototype) {
              ko.utils.extend(observable, ko.subscribable['fn']);
            }
            ko.subscribable['fn'].init(observable);
            ko.utils.setPrototypeOfOrExtend(observable, observableFn);
            if (ko.options['deferUpdates']) {
              ko.extenders['deferred'](observable, true);
            }
            return observable;
          };
          var observableFn = {
            'equalityComparer': valuesArePrimitiveAndEqual,
            peek: function() {
              return this[observableLatestValue];
            },
            valueHasMutated: function() {
              this['notifySubscribers'](this[observableLatestValue]);
            },
            valueWillMutate: function() {
              this['notifySubscribers'](this[observableLatestValue], 'beforeChange');
            }
          };
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
          }
          var protoProperty = ko.observable.protoProperty = '__ko_proto__';
          observableFn[protoProperty] = ko.observable;
          ko.hasPrototype = function(instance, prototype) {
            if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined))
              return false;
            if (instance[protoProperty] === prototype)
              return true;
            return ko.hasPrototype(instance[protoProperty], prototype);
          };
          ko.isObservable = function(instance) {
            return ko.hasPrototype(instance, ko.observable);
          };
          ko.isWriteableObservable = function(instance) {
            if ((typeof instance == 'function') && instance[protoProperty] === ko.observable)
              return true;
            if ((typeof instance == 'function') && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
              return true;
            return false;
          };
          ko.exportSymbol('observable', ko.observable);
          ko.exportSymbol('isObservable', ko.isObservable);
          ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
          ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
          ko.exportSymbol('observable.fn', observableFn);
          ko.exportProperty(observableFn, 'peek', observableFn.peek);
          ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
          ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
          ko.observableArray = function(initialValues) {
            initialValues = initialValues || [];
            if (typeof initialValues != 'object' || !('length' in initialValues))
              throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
            var result = ko.observable(initialValues);
            ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
            return result.extend({'trackArrayChanges': true});
          };
          ko.observableArray['fn'] = {
            'remove': function(valueOrPredicate) {
              var underlyingArray = this.peek();
              var removedValues = [];
              var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function(value) {
                return value === valueOrPredicate;
              };
              for (var i = 0; i < underlyingArray.length; i++) {
                var value = underlyingArray[i];
                if (predicate(value)) {
                  if (removedValues.length === 0) {
                    this.valueWillMutate();
                  }
                  removedValues.push(value);
                  underlyingArray.splice(i, 1);
                  i--;
                }
              }
              if (removedValues.length) {
                this.valueHasMutated();
              }
              return removedValues;
            },
            'removeAll': function(arrayOfValues) {
              if (arrayOfValues === undefined) {
                var underlyingArray = this.peek();
                var allValues = underlyingArray.slice(0);
                this.valueWillMutate();
                underlyingArray.splice(0, underlyingArray.length);
                this.valueHasMutated();
                return allValues;
              }
              if (!arrayOfValues)
                return [];
              return this['remove'](function(value) {
                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
              });
            },
            'destroy': function(valueOrPredicate) {
              var underlyingArray = this.peek();
              var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function(value) {
                return value === valueOrPredicate;
              };
              this.valueWillMutate();
              for (var i = underlyingArray.length - 1; i >= 0; i--) {
                var value = underlyingArray[i];
                if (predicate(value))
                  underlyingArray[i]["_destroy"] = true;
              }
              this.valueHasMutated();
            },
            'destroyAll': function(arrayOfValues) {
              if (arrayOfValues === undefined)
                return this['destroy'](function() {
                  return true;
                });
              if (!arrayOfValues)
                return [];
              return this['destroy'](function(value) {
                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
              });
            },
            'indexOf': function(item) {
              var underlyingArray = this();
              return ko.utils.arrayIndexOf(underlyingArray, item);
            },
            'replace': function(oldItem, newItem) {
              var index = this['indexOf'](oldItem);
              if (index >= 0) {
                this.valueWillMutate();
                this.peek()[index] = newItem;
                this.valueHasMutated();
              }
            }
          };
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
          }
          ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(methodName) {
            ko.observableArray['fn'][methodName] = function() {
              var underlyingArray = this.peek();
              this.valueWillMutate();
              this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
              var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
              this.valueHasMutated();
              return methodCallResult === underlyingArray ? this : methodCallResult;
            };
          });
          ko.utils.arrayForEach(["slice"], function(methodName) {
            ko.observableArray['fn'][methodName] = function() {
              var underlyingArray = this();
              return underlyingArray[methodName].apply(underlyingArray, arguments);
            };
          });
          ko.exportSymbol('observableArray', ko.observableArray);
          var arrayChangeEventName = 'arrayChange';
          ko.extenders['trackArrayChanges'] = function(target, options) {
            target.compareArrayOptions = {};
            if (options && typeof options == "object") {
              ko.utils.extend(target.compareArrayOptions, options);
            }
            target.compareArrayOptions['sparse'] = true;
            if (target.cacheDiffForKnownOperation) {
              return;
            }
            var trackingChanges = false,
                cachedDiff = null,
                arrayChangeSubscription,
                pendingNotifications = 0,
                underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
                underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;
            target.beforeSubscriptionAdd = function(event) {
              if (underlyingBeforeSubscriptionAddFunction)
                underlyingBeforeSubscriptionAddFunction.call(target, event);
              if (event === arrayChangeEventName) {
                trackChanges();
              }
            };
            target.afterSubscriptionRemove = function(event) {
              if (underlyingAfterSubscriptionRemoveFunction)
                underlyingAfterSubscriptionRemoveFunction.call(target, event);
              if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                arrayChangeSubscription.dispose();
                trackingChanges = false;
              }
            };
            function trackChanges() {
              if (trackingChanges) {
                return;
              }
              trackingChanges = true;
              var underlyingNotifySubscribersFunction = target['notifySubscribers'];
              target['notifySubscribers'] = function(valueToNotify, event) {
                if (!event || event === defaultEvent) {
                  ++pendingNotifications;
                }
                return underlyingNotifySubscribersFunction.apply(this, arguments);
              };
              var previousContents = [].concat(target.peek() || []);
              cachedDiff = null;
              arrayChangeSubscription = target.subscribe(function(currentContents) {
                currentContents = [].concat(currentContents || []);
                if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                  var changes = getChanges(previousContents, currentContents);
                }
                previousContents = currentContents;
                cachedDiff = null;
                pendingNotifications = 0;
                if (changes && changes.length) {
                  target['notifySubscribers'](changes, arrayChangeEventName);
                }
              });
            }
            function getChanges(previousContents, currentContents) {
              if (!cachedDiff || pendingNotifications > 1) {
                cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
              }
              return cachedDiff;
            }
            target.cacheDiffForKnownOperation = function(rawArray, operationName, args) {
              if (!trackingChanges || pendingNotifications) {
                return;
              }
              var diff = [],
                  arrayLength = rawArray.length,
                  argsLength = args.length,
                  offset = 0;
              function pushDiff(status, value, index) {
                return diff[diff.length] = {
                  'status': status,
                  'value': value,
                  'index': index
                };
              }
              switch (operationName) {
                case 'push':
                  offset = arrayLength;
                case 'unshift':
                  for (var index = 0; index < argsLength; index++) {
                    pushDiff('added', args[index], offset + index);
                  }
                  break;
                case 'pop':
                  offset = arrayLength - 1;
                case 'shift':
                  if (arrayLength) {
                    pushDiff('deleted', rawArray[offset], offset);
                  }
                  break;
                case 'splice':
                  var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                      endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                      endAddIndex = startIndex + argsLength - 2,
                      endIndex = Math.max(endDeleteIndex, endAddIndex),
                      additions = [],
                      deletions = [];
                  for (var index = startIndex,
                      argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                    if (index < endDeleteIndex)
                      deletions.push(pushDiff('deleted', rawArray[index], index));
                    if (index < endAddIndex)
                      additions.push(pushDiff('added', args[argsIndex], index));
                  }
                  ko.utils.findMovesInArrayComparison(deletions, additions);
                  break;
                default:
                  return;
              }
              cachedDiff = diff;
            };
          };
          var computedState = ko.utils.createSymbolOrString('_state');
          ko.computed = ko.dependentObservable = function(evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
            if (typeof evaluatorFunctionOrOptions === "object") {
              options = evaluatorFunctionOrOptions;
            } else {
              options = options || {};
              if (evaluatorFunctionOrOptions) {
                options["read"] = evaluatorFunctionOrOptions;
              }
            }
            if (typeof options["read"] != "function")
              throw Error("Pass a function that returns the value of the ko.computed");
            var writeFunction = options["write"];
            var state = {
              latestValue: undefined,
              isStale: true,
              isBeingEvaluated: false,
              suppressDisposalUntilDisposeWhenReturnsFalse: false,
              isDisposed: false,
              pure: false,
              isSleeping: false,
              readFunction: options["read"],
              evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
              disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
              disposeWhen: options["disposeWhen"] || options.disposeWhen,
              domNodeDisposalCallback: null,
              dependencyTracking: {},
              dependenciesCount: 0,
              evaluationTimeoutInstance: null
            };
            function computedObservable() {
              if (arguments.length > 0) {
                if (typeof writeFunction === "function") {
                  writeFunction.apply(state.evaluatorFunctionTarget, arguments);
                } else {
                  throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                }
                return this;
              } else {
                ko.dependencyDetection.registerDependency(computedObservable);
                if (state.isStale || (state.isSleeping && computedObservable.haveDependenciesChanged())) {
                  computedObservable.evaluateImmediate();
                }
                return state.latestValue;
              }
            }
            computedObservable[computedState] = state;
            computedObservable.hasWriteFunction = typeof writeFunction === "function";
            if (!ko.utils.canSetPrototype) {
              ko.utils.extend(computedObservable, ko.subscribable['fn']);
            }
            ko.subscribable['fn'].init(computedObservable);
            ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);
            if (options['pure']) {
              state.pure = true;
              state.isSleeping = true;
              ko.utils.extend(computedObservable, pureComputedOverrides);
            } else if (options['deferEvaluation']) {
              ko.utils.extend(computedObservable, deferEvaluationOverrides);
            }
            if (ko.options['deferUpdates']) {
              ko.extenders['deferred'](computedObservable, true);
            }
            if (DEBUG) {
              computedObservable["_options"] = options;
            }
            if (state.disposeWhenNodeIsRemoved) {
              state.suppressDisposalUntilDisposeWhenReturnsFalse = true;
              if (!state.disposeWhenNodeIsRemoved.nodeType) {
                state.disposeWhenNodeIsRemoved = null;
              }
            }
            if (!state.isSleeping && !options['deferEvaluation']) {
              computedObservable.evaluateImmediate();
            }
            if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
              ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function() {
                computedObservable.dispose();
              });
            }
            return computedObservable;
          };
          function computedDisposeDependencyCallback(id, entryToDispose) {
            if (entryToDispose !== null && entryToDispose.dispose) {
              entryToDispose.dispose();
            }
          }
          function computedBeginDependencyDetectionCallback(subscribable, id) {
            var computedObservable = this.computedObservable,
                state = computedObservable[computedState];
            if (!state.isDisposed) {
              if (this.disposalCount && this.disposalCandidates[id]) {
                computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
                this.disposalCandidates[id] = null;
                --this.disposalCount;
              } else if (!state.dependencyTracking[id]) {
                computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? {_target: subscribable} : computedObservable.subscribeToDependency(subscribable));
              }
            }
          }
          var computedFn = {
            "equalityComparer": valuesArePrimitiveAndEqual,
            getDependenciesCount: function() {
              return this[computedState].dependenciesCount;
            },
            addDependencyTracking: function(id, target, trackingObj) {
              if (this[computedState].pure && target === this) {
                throw Error("A 'pure' computed must not be called recursively");
              }
              this[computedState].dependencyTracking[id] = trackingObj;
              trackingObj._order = this[computedState].dependenciesCount++;
              trackingObj._version = target.getVersion();
            },
            haveDependenciesChanged: function() {
              var id,
                  dependency,
                  dependencyTracking = this[computedState].dependencyTracking;
              for (id in dependencyTracking) {
                if (dependencyTracking.hasOwnProperty(id)) {
                  dependency = dependencyTracking[id];
                  if (dependency._target.hasChanged(dependency._version)) {
                    return true;
                  }
                }
              }
            },
            markDirty: function() {
              if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
                this._evalDelayed();
              }
            },
            isActive: function() {
              return this[computedState].isStale || this[computedState].dependenciesCount > 0;
            },
            respondToChange: function() {
              if (!this._notificationIsPending) {
                this.evaluatePossiblyAsync();
              }
            },
            subscribeToDependency: function(target) {
              if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
                var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
                    changeSub = target.subscribe(this.respondToChange, this);
                return {
                  _target: target,
                  dispose: function() {
                    dirtySub.dispose();
                    changeSub.dispose();
                  }
                };
              } else {
                return target.subscribe(this.evaluatePossiblyAsync, this);
              }
            },
            evaluatePossiblyAsync: function() {
              var computedObservable = this,
                  throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
              if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
                clearTimeout(this[computedState].evaluationTimeoutInstance);
                this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function() {
                  computedObservable.evaluateImmediate(true);
                }, throttleEvaluationTimeout);
              } else if (computedObservable._evalDelayed) {
                computedObservable._evalDelayed();
              } else {
                computedObservable.evaluateImmediate(true);
              }
            },
            evaluateImmediate: function(notifyChange) {
              var computedObservable = this,
                  state = computedObservable[computedState],
                  disposeWhen = state.disposeWhen;
              if (state.isBeingEvaluated) {
                return;
              }
              if (state.isDisposed) {
                return;
              }
              if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
                if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
                  computedObservable.dispose();
                  return;
                }
              } else {
                state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
              }
              state.isBeingEvaluated = true;
              try {
                this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
              } finally {
                state.isBeingEvaluated = false;
              }
              if (!state.dependenciesCount) {
                computedObservable.dispose();
              }
            },
            evaluateImmediate_CallReadWithDependencyDetection: function(notifyChange) {
              var computedObservable = this,
                  state = computedObservable[computedState];
              var isInitial = state.pure ? undefined : !state.dependenciesCount,
                  dependencyDetectionContext = {
                    computedObservable: computedObservable,
                    disposalCandidates: state.dependencyTracking,
                    disposalCount: state.dependenciesCount
                  };
              ko.dependencyDetection.begin({
                callbackTarget: dependencyDetectionContext,
                callback: computedBeginDependencyDetectionCallback,
                computed: computedObservable,
                isInitial: isInitial
              });
              state.dependencyTracking = {};
              state.dependenciesCount = 0;
              var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);
              if (computedObservable.isDifferent(state.latestValue, newValue)) {
                if (!state.isSleeping) {
                  computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
                }
                state.latestValue = newValue;
                if (state.isSleeping) {
                  computedObservable.updateVersion();
                } else if (notifyChange) {
                  computedObservable["notifySubscribers"](state.latestValue);
                }
              }
              if (isInitial) {
                computedObservable["notifySubscribers"](state.latestValue, "awake");
              }
            },
            evaluateImmediate_CallReadThenEndDependencyDetection: function(state, dependencyDetectionContext) {
              try {
                var readFunction = state.readFunction;
                return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
              } finally {
                ko.dependencyDetection.end();
                if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
                  ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
                }
                state.isStale = false;
              }
            },
            peek: function() {
              var state = this[computedState];
              if ((state.isStale && !state.dependenciesCount) || (state.isSleeping && this.haveDependenciesChanged())) {
                this.evaluateImmediate();
              }
              return state.latestValue;
            },
            limit: function(limitFunction) {
              ko.subscribable['fn'].limit.call(this, limitFunction);
              this._evalDelayed = function() {
                this._limitBeforeChange(this[computedState].latestValue);
                this[computedState].isStale = true;
                this._limitChange(this);
              };
            },
            dispose: function() {
              var state = this[computedState];
              if (!state.isSleeping && state.dependencyTracking) {
                ko.utils.objectForEach(state.dependencyTracking, function(id, dependency) {
                  if (dependency.dispose)
                    dependency.dispose();
                });
              }
              if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
                ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
              }
              state.dependencyTracking = null;
              state.dependenciesCount = 0;
              state.isDisposed = true;
              state.isStale = false;
              state.isSleeping = false;
              state.disposeWhenNodeIsRemoved = null;
            }
          };
          var pureComputedOverrides = {
            beforeSubscriptionAdd: function(event) {
              var computedObservable = this,
                  state = computedObservable[computedState];
              if (!state.isDisposed && state.isSleeping && event == 'change') {
                state.isSleeping = false;
                if (state.isStale || computedObservable.haveDependenciesChanged()) {
                  state.dependencyTracking = null;
                  state.dependenciesCount = 0;
                  state.isStale = true;
                  computedObservable.evaluateImmediate();
                } else {
                  var dependeciesOrder = [];
                  ko.utils.objectForEach(state.dependencyTracking, function(id, dependency) {
                    dependeciesOrder[dependency._order] = id;
                  });
                  ko.utils.arrayForEach(dependeciesOrder, function(id, order) {
                    var dependency = state.dependencyTracking[id],
                        subscription = computedObservable.subscribeToDependency(dependency._target);
                    subscription._order = order;
                    subscription._version = dependency._version;
                    state.dependencyTracking[id] = subscription;
                  });
                }
                if (!state.isDisposed) {
                  computedObservable["notifySubscribers"](state.latestValue, "awake");
                }
              }
            },
            afterSubscriptionRemove: function(event) {
              var state = this[computedState];
              if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
                ko.utils.objectForEach(state.dependencyTracking, function(id, dependency) {
                  if (dependency.dispose) {
                    state.dependencyTracking[id] = {
                      _target: dependency._target,
                      _order: dependency._order,
                      _version: dependency._version
                    };
                    dependency.dispose();
                  }
                });
                state.isSleeping = true;
                this["notifySubscribers"](undefined, "asleep");
              }
            },
            getVersion: function() {
              var state = this[computedState];
              if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
                this.evaluateImmediate();
              }
              return ko.subscribable['fn'].getVersion.call(this);
            }
          };
          var deferEvaluationOverrides = {beforeSubscriptionAdd: function(event) {
              if (event == 'change' || event == 'beforeChange') {
                this.peek();
              }
            }};
          if (ko.utils.canSetPrototype) {
            ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
          }
          var protoProp = ko.observable.protoProperty;
          ko.computed[protoProp] = ko.observable;
          computedFn[protoProp] = ko.computed;
          ko.isComputed = function(instance) {
            return ko.hasPrototype(instance, ko.computed);
          };
          ko.isPureComputed = function(instance) {
            return ko.hasPrototype(instance, ko.computed) && instance[computedState] && instance[computedState].pure;
          };
          ko.exportSymbol('computed', ko.computed);
          ko.exportSymbol('dependentObservable', ko.computed);
          ko.exportSymbol('isComputed', ko.isComputed);
          ko.exportSymbol('isPureComputed', ko.isPureComputed);
          ko.exportSymbol('computed.fn', computedFn);
          ko.exportProperty(computedFn, 'peek', computedFn.peek);
          ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
          ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
          ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);
          ko.pureComputed = function(evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
            if (typeof evaluatorFunctionOrOptions === 'function') {
              return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, {'pure': true});
            } else {
              evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions);
              evaluatorFunctionOrOptions['pure'] = true;
              return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
            }
          };
          ko.exportSymbol('pureComputed', ko.pureComputed);
          (function() {
            var maxNestedObservableDepth = 10;
            ko.toJS = function(rootObject) {
              if (arguments.length == 0)
                throw new Error("When calling ko.toJS, pass the object you want to convert.");
              return mapJsObjectGraph(rootObject, function(valueToMap) {
                for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                  valueToMap = valueToMap();
                return valueToMap;
              });
            };
            ko.toJSON = function(rootObject, replacer, space) {
              var plainJavaScriptObject = ko.toJS(rootObject);
              return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
            };
            function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
              visitedObjects = visitedObjects || new objectLookup();
              rootObject = mapInputCallback(rootObject);
              var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof RegExp)) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
              if (!canHaveProperties)
                return rootObject;
              var outputProperties = rootObject instanceof Array ? [] : {};
              visitedObjects.save(rootObject, outputProperties);
              visitPropertiesOrArrayEntries(rootObject, function(indexer) {
                var propertyValue = mapInputCallback(rootObject[indexer]);
                switch (typeof propertyValue) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                  case "object":
                  case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined) ? previouslyMappedValue : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
                }
              });
              return outputProperties;
            }
            function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
              if (rootObject instanceof Array) {
                for (var i = 0; i < rootObject.length; i++)
                  visitorCallback(i);
                if (typeof rootObject['toJSON'] == 'function')
                  visitorCallback('toJSON');
              } else {
                for (var propertyName in rootObject) {
                  visitorCallback(propertyName);
                }
              }
            }
            ;
            function objectLookup() {
              this.keys = [];
              this.values = [];
            }
            ;
            objectLookup.prototype = {
              constructor: objectLookup,
              save: function(key, value) {
                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                if (existingIndex >= 0)
                  this.values[existingIndex] = value;
                else {
                  this.keys.push(key);
                  this.values.push(value);
                }
              },
              get: function(key) {
                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
              }
            };
          })();
          ko.exportSymbol('toJS', ko.toJS);
          ko.exportSymbol('toJSON', ko.toJSON);
          (function() {
            var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';
            ko.selectExtensions = {
              readValue: function(element) {
                switch (ko.utils.tagNameLower(element)) {
                  case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                      return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7 ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text) : element.value;
                  case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                  default:
                    return element.value;
                }
              },
              writeValue: function(element, value, allowUnset) {
                switch (ko.utils.tagNameLower(element)) {
                  case 'option':
                    switch (typeof value) {
                      case "string":
                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                        if (hasDomDataExpandoProperty in element) {
                          delete element[hasDomDataExpandoProperty];
                        }
                        element.value = value;
                        break;
                      default:
                        ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                        element[hasDomDataExpandoProperty] = true;
                        element.value = typeof value === "number" ? value : "";
                        break;
                    }
                    break;
                  case 'select':
                    if (value === "" || value === null)
                      value = undefined;
                    var selection = -1;
                    for (var i = 0,
                        n = element.options.length,
                        optionValue; i < n; ++i) {
                      optionValue = ko.selectExtensions.readValue(element.options[i]);
                      if (optionValue == value || (optionValue == "" && value === undefined)) {
                        selection = i;
                        break;
                      }
                    }
                    if (allowUnset || selection >= 0 || (value === undefined && element.size > 1)) {
                      element.selectedIndex = selection;
                    }
                    break;
                  default:
                    if ((value === null) || (value === undefined))
                      value = "";
                    element.value = value;
                    break;
                }
              }
            };
          })();
          ko.exportSymbol('selectExtensions', ko.selectExtensions);
          ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
          ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
          ko.expressionRewriting = (function() {
            var javaScriptReservedWords = ["true", "false", "null", "undefined"];
            var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;
            function getWriteableValue(expression) {
              if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0)
                return false;
              var match = expression.match(javaScriptAssignmentTarget);
              return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
            }
            var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
                stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
                stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
                specials = ',"\'{}()/:[\\]',
                everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
                oneNotSpace = '[^\\s]',
                bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),
                divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
                keywordRegexLookBehind = {
                  'in': 1,
                  'return': 1,
                  'typeof': 1
                };
            function parseObjectLiteral(objectLiteralString) {
              var str = ko.utils.stringTrim(objectLiteralString);
              if (str.charCodeAt(0) === 123)
                str = str.slice(1, -1);
              var result = [],
                  toks = str.match(bindingToken),
                  key,
                  values = [],
                  depth = 0;
              if (toks) {
                toks.push(',');
                for (var i = 0,
                    tok; tok = toks[i]; ++i) {
                  var c = tok.charCodeAt(0);
                  if (c === 44) {
                    if (depth <= 0) {
                      result.push((key && values.length) ? {
                        key: key,
                        value: values.join('')
                      } : {'unknown': key || values.join('')});
                      key = depth = 0;
                      values = [];
                      continue;
                    }
                  } else if (c === 58) {
                    if (!depth && !key && values.length === 1) {
                      key = values.pop();
                      continue;
                    }
                  } else if (c === 47 && i && tok.length > 1) {
                    var match = toks[i - 1].match(divisionLookBehind);
                    if (match && !keywordRegexLookBehind[match[0]]) {
                      str = str.substr(str.indexOf(tok) + 1);
                      toks = str.match(bindingToken);
                      toks.push(',');
                      i = -1;
                      tok = '/';
                    }
                  } else if (c === 40 || c === 123 || c === 91) {
                    ++depth;
                  } else if (c === 41 || c === 125 || c === 93) {
                    --depth;
                  } else if (!key && !values.length && (c === 34 || c === 39)) {
                    tok = tok.slice(1, -1);
                  }
                  values.push(tok);
                }
              }
              return result;
            }
            var twoWayBindings = {};
            function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
              bindingOptions = bindingOptions || {};
              function processKeyValue(key, val) {
                var writableVal;
                function callPreprocessHook(obj) {
                  return (obj && obj['preprocess']) ? (val = obj['preprocess'](val, key, processKeyValue)) : true;
                }
                if (!bindingParams) {
                  if (!callPreprocessHook(ko['getBindingHandler'](key)))
                    return;
                  if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                    propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                  }
                }
                if (makeValueAccessors) {
                  val = 'function(){return ' + val + ' }';
                }
                resultStrings.push("'" + key + "':" + val);
              }
              var resultStrings = [],
                  propertyAccessorResultStrings = [],
                  makeValueAccessors = bindingOptions['valueAccessors'],
                  bindingParams = bindingOptions['bindingParams'],
                  keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ? parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;
              ko.utils.arrayForEach(keyValueArray, function(keyValue) {
                processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
              });
              if (propertyAccessorResultStrings.length)
                processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");
              return resultStrings.join(",");
            }
            return {
              bindingRewriteValidators: [],
              twoWayBindings: twoWayBindings,
              parseObjectLiteral: parseObjectLiteral,
              preProcessBindings: preProcessBindings,
              keyValueArrayContainsKey: function(keyValueArray, key) {
                for (var i = 0; i < keyValueArray.length; i++)
                  if (keyValueArray[i]['key'] == key)
                    return true;
                return false;
              },
              writeValueToProperty: function(property, allBindings, key, value, checkIfDifferent) {
                if (!property || !ko.isObservable(property)) {
                  var propWriters = allBindings.get('_ko_property_writers');
                  if (propWriters && propWriters[key])
                    propWriters[key](value);
                } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                  property(value);
                }
              }
            };
          })();
          ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
          ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
          ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
          ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);
          ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);
          ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
          ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
          (function() {
            var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";
            var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
            var endCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
            var htmlTagsWithOptionallyClosingChildren = {
              'ul': true,
              'ol': true
            };
            function isStartComment(node) {
              return (node.nodeType == 8) && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
            }
            function isEndComment(node) {
              return (node.nodeType == 8) && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
            }
            function getVirtualChildren(startComment, allowUnbalanced) {
              var currentNode = startComment;
              var depth = 1;
              var children = [];
              while (currentNode = currentNode.nextSibling) {
                if (isEndComment(currentNode)) {
                  depth--;
                  if (depth === 0)
                    return children;
                }
                children.push(currentNode);
                if (isStartComment(currentNode))
                  depth++;
              }
              if (!allowUnbalanced)
                throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
              return null;
            }
            function getMatchingEndComment(startComment, allowUnbalanced) {
              var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
              if (allVirtualChildren) {
                if (allVirtualChildren.length > 0)
                  return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
                return startComment.nextSibling;
              } else
                return null;
            }
            function getUnbalancedChildTags(node) {
              var childNode = node.firstChild,
                  captureRemaining = null;
              if (childNode) {
                do {
                  if (captureRemaining)
                    captureRemaining.push(childNode);
                  else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, true);
                    if (matchingEndComment)
                      childNode = matchingEndComment;
                    else
                      captureRemaining = [childNode];
                  } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];
                  }
                } while (childNode = childNode.nextSibling);
              }
              return captureRemaining;
            }
            ko.virtualElements = {
              allowedBindings: {},
              childNodes: function(node) {
                return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
              },
              emptyNode: function(node) {
                if (!isStartComment(node))
                  ko.utils.emptyDomNode(node);
                else {
                  var virtualChildren = ko.virtualElements.childNodes(node);
                  for (var i = 0,
                      j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
                }
              },
              setDomNodeChildren: function(node, childNodes) {
                if (!isStartComment(node))
                  ko.utils.setDomNodeChildren(node, childNodes);
                else {
                  ko.virtualElements.emptyNode(node);
                  var endCommentNode = node.nextSibling;
                  for (var i = 0,
                      j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
                }
              },
              prepend: function(containerNode, nodeToPrepend) {
                if (!isStartComment(containerNode)) {
                  if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                  else
                    containerNode.appendChild(nodeToPrepend);
                } else {
                  containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
                }
              },
              insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
                if (!insertAfterNode) {
                  ko.virtualElements.prepend(containerNode, nodeToInsert);
                } else if (!isStartComment(containerNode)) {
                  if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                  else
                    containerNode.appendChild(nodeToInsert);
                } else {
                  containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                }
              },
              firstChild: function(node) {
                if (!isStartComment(node))
                  return node.firstChild;
                if (!node.nextSibling || isEndComment(node.nextSibling))
                  return null;
                return node.nextSibling;
              },
              nextSibling: function(node) {
                if (isStartComment(node))
                  node = getMatchingEndComment(node);
                if (node.nextSibling && isEndComment(node.nextSibling))
                  return null;
                return node.nextSibling;
              },
              hasBindingValue: isStartComment,
              virtualNodeBindingValue: function(node) {
                var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
                return regexMatch ? regexMatch[1] : null;
              },
              normaliseVirtualElementDomStructure: function(elementVerified) {
                if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                  return;
                var childNode = elementVerified.firstChild;
                if (childNode) {
                  do {
                    if (childNode.nodeType === 1) {
                      var unbalancedTags = getUnbalancedChildTags(childNode);
                      if (unbalancedTags) {
                        var nodeToInsertBefore = childNode.nextSibling;
                        for (var i = 0; i < unbalancedTags.length; i++) {
                          if (nodeToInsertBefore)
                            elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                          else
                            elementVerified.appendChild(unbalancedTags[i]);
                        }
                      }
                    }
                  } while (childNode = childNode.nextSibling);
                }
              }
            };
          })();
          ko.exportSymbol('virtualElements', ko.virtualElements);
          ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
          ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
          ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
          ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
          ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
          (function() {
            var defaultBindingAttributeName = "data-bind";
            ko.bindingProvider = function() {
              this.bindingCache = {};
            };
            ko.utils.extend(ko.bindingProvider.prototype, {
              'nodeHasBindings': function(node) {
                switch (node.nodeType) {
                  case 1:
                    return node.getAttribute(defaultBindingAttributeName) != null || ko.components['getComponentNameForNode'](node);
                  case 8:
                    return ko.virtualElements.hasBindingValue(node);
                  default:
                    return false;
                }
              },
              'getBindings': function(node, bindingContext) {
                var bindingsString = this['getBindingsString'](node, bindingContext),
                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, false);
              },
              'getBindingAccessors': function(node, bindingContext) {
                var bindingsString = this['getBindingsString'](node, bindingContext),
                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, {'valueAccessors': true}) : null;
                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, true);
              },
              'getBindingsString': function(node, bindingContext) {
                switch (node.nodeType) {
                  case 1:
                    return node.getAttribute(defaultBindingAttributeName);
                  case 8:
                    return ko.virtualElements.virtualNodeBindingValue(node);
                  default:
                    return null;
                }
              },
              'parseBindingsString': function(bindingsString, bindingContext, node, options) {
                try {
                  var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                  return bindingFunction(bindingContext, node);
                } catch (ex) {
                  ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                  throw ex;
                }
              }
            });
            ko.bindingProvider['instance'] = new ko.bindingProvider();
            function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
              var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
              return cache[cacheKey] || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
            }
            function createBindingsStringEvaluator(bindingsString, options) {
              var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
                  functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
              return new Function("$context", "$element", functionBody);
            }
          })();
          ko.exportSymbol('bindingProvider', ko.bindingProvider);
          (function() {
            ko.bindingHandlers = {};
            var bindingDoesNotRecurseIntoElementTypes = {
              'script': true,
              'textarea': true,
              'template': true
            };
            ko['getBindingHandler'] = function(bindingKey) {
              return ko.bindingHandlers[bindingKey];
            };
            ko.bindingContext = function(dataItemOrAccessor, parentContext, dataItemAlias, extendCallback) {
              function updateContext() {
                var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                    dataItem = ko.utils.unwrapObservable(dataItemOrObservable);
                if (parentContext) {
                  if (parentContext._subscribable)
                    parentContext._subscribable();
                  ko.utils.extend(self, parentContext);
                  if (subscribable) {
                    self._subscribable = subscribable;
                  }
                } else {
                  self['$parents'] = [];
                  self['$root'] = dataItem;
                  self['ko'] = ko;
                }
                self['$rawData'] = dataItemOrObservable;
                self['$data'] = dataItem;
                if (dataItemAlias)
                  self[dataItemAlias] = dataItem;
                if (extendCallback)
                  extendCallback(self, parentContext, dataItem);
                return self['$data'];
              }
              function disposeWhen() {
                return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
              }
              var self = this,
                  isFunc = typeof(dataItemOrAccessor) == "function" && !ko.isObservable(dataItemOrAccessor),
                  nodes,
                  subscribable = ko.dependentObservable(updateContext, null, {
                    disposeWhen: disposeWhen,
                    disposeWhenNodeIsRemoved: true
                  });
              if (subscribable.isActive()) {
                self._subscribable = subscribable;
                subscribable['equalityComparer'] = null;
                nodes = [];
                subscribable._addNode = function(node) {
                  nodes.push(node);
                  ko.utils.domNodeDisposal.addDisposeCallback(node, function(node) {
                    ko.utils.arrayRemoveItem(nodes, node);
                    if (!nodes.length) {
                      subscribable.dispose();
                      self._subscribable = subscribable = undefined;
                    }
                  });
                };
              }
            };
            ko.bindingContext.prototype['createChildContext'] = function(dataItemOrAccessor, dataItemAlias, extendCallback) {
              return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function(self, parentContext) {
                self['$parentContext'] = parentContext;
                self['$parent'] = parentContext['$data'];
                self['$parents'] = (parentContext['$parents'] || []).slice(0);
                self['$parents'].unshift(self['$parent']);
                if (extendCallback)
                  extendCallback(self);
              });
            };
            ko.bindingContext.prototype['extend'] = function(properties) {
              return new ko.bindingContext(this._subscribable || this['$data'], this, null, function(self, parentContext) {
                self['$rawData'] = parentContext['$rawData'];
                ko.utils.extend(self, typeof(properties) == "function" ? properties() : properties);
              });
            };
            function makeValueAccessor(value) {
              return function() {
                return value;
              };
            }
            function evaluateValueAccessor(valueAccessor) {
              return valueAccessor();
            }
            function makeAccessorsFromFunction(callback) {
              return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function(value, key) {
                return function() {
                  return callback()[key];
                };
              });
            }
            function makeBindingAccessors(bindings, context, node) {
              if (typeof bindings === 'function') {
                return makeAccessorsFromFunction(bindings.bind(null, context, node));
              } else {
                return ko.utils.objectMap(bindings, makeValueAccessor);
              }
            }
            function getBindingsAndMakeAccessors(node, context) {
              return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
            }
            function validateThatBindingIsAllowedForVirtualElements(bindingName) {
              var validator = ko.virtualElements.allowedBindings[bindingName];
              if (!validator)
                throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements");
            }
            function applyBindingsToDescendantsInternal(bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
              var currentChild,
                  nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
                  provider = ko.bindingProvider['instance'],
                  preprocessNode = provider['preprocessNode'];
              if (preprocessNode) {
                while (currentChild = nextInQueue) {
                  nextInQueue = ko.virtualElements.nextSibling(currentChild);
                  preprocessNode.call(provider, currentChild);
                }
                nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
              }
              while (currentChild = nextInQueue) {
                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
              }
            }
            function applyBindingsToNodeAndDescendantsInternal(bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
              var shouldBindDescendants = true;
              var isElement = (nodeVerified.nodeType === 1);
              if (isElement)
                ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);
              var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement) || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);
              if (shouldApplyBindings)
                shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];
              if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
                applyBindingsToDescendantsInternal(bindingContext, nodeVerified, !isElement);
              }
            }
            var boundElementDomDataKey = ko.utils.domData.nextKey();
            function topologicalSortBindings(bindings) {
              var result = [],
                  bindingsConsidered = {},
                  cyclicDependencyStack = [];
              ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
                if (!bindingsConsidered[bindingKey]) {
                  var binding = ko['getBindingHandler'](bindingKey);
                  if (binding) {
                    if (binding['after']) {
                      cyclicDependencyStack.push(bindingKey);
                      ko.utils.arrayForEach(binding['after'], function(bindingDependencyKey) {
                        if (bindings[bindingDependencyKey]) {
                          if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                            throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                          } else {
                            pushBinding(bindingDependencyKey);
                          }
                        }
                      });
                      cyclicDependencyStack.length--;
                    }
                    result.push({
                      key: bindingKey,
                      handler: binding
                    });
                  }
                  bindingsConsidered[bindingKey] = true;
                }
              });
              return result;
            }
            function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
              var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
              if (!sourceBindings) {
                if (alreadyBound) {
                  throw Error("You cannot apply bindings multiple times to the same element.");
                }
                ko.utils.domData.set(node, boundElementDomDataKey, true);
              }
              if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
                ko.storedBindingContextForNode(node, bindingContext);
              var bindings;
              if (sourceBindings && typeof sourceBindings !== 'function') {
                bindings = sourceBindings;
              } else {
                var provider = ko.bindingProvider['instance'],
                    getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;
                var bindingsUpdater = ko.dependentObservable(function() {
                  bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                  if (bindings && bindingContext._subscribable)
                    bindingContext._subscribable();
                  return bindings;
                }, null, {disposeWhenNodeIsRemoved: node});
                if (!bindings || !bindingsUpdater.isActive())
                  bindingsUpdater = null;
              }
              var bindingHandlerThatControlsDescendantBindings;
              if (bindings) {
                var getValueAccessor = bindingsUpdater ? function(bindingKey) {
                  return function() {
                    return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                  };
                } : function(bindingKey) {
                  return bindings[bindingKey];
                };
                function allBindings() {
                  return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
                }
                allBindings['get'] = function(key) {
                  return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
                };
                allBindings['has'] = function(key) {
                  return key in bindings;
                };
                var orderedBindings = topologicalSortBindings(bindings);
                ko.utils.arrayForEach(orderedBindings, function(bindingKeyAndHandler) {
                  var handlerInitFn = bindingKeyAndHandler.handler["init"],
                      handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                      bindingKey = bindingKeyAndHandler.key;
                  if (node.nodeType === 8) {
                    validateThatBindingIsAllowedForVirtualElements(bindingKey);
                  }
                  try {
                    if (typeof handlerInitFn == "function") {
                      ko.dependencyDetection.ignore(function() {
                        var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                        if (initResult && initResult['controlsDescendantBindings']) {
                          if (bindingHandlerThatControlsDescendantBindings !== undefined)
                            throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                          bindingHandlerThatControlsDescendantBindings = bindingKey;
                        }
                      });
                    }
                    if (typeof handlerUpdateFn == "function") {
                      ko.dependentObservable(function() {
                        handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                      }, null, {disposeWhenNodeIsRemoved: node});
                    }
                  } catch (ex) {
                    ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                    throw ex;
                  }
                });
              }
              return {'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined};
            }
            ;
            var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
            ko.storedBindingContextForNode = function(node, bindingContext) {
              if (arguments.length == 2) {
                ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
                if (bindingContext._subscribable)
                  bindingContext._subscribable._addNode(node);
              } else {
                return ko.utils.domData.get(node, storedBindingContextDomDataKey);
              }
            };
            function getBindingContext(viewModelOrBindingContext) {
              return viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext) ? viewModelOrBindingContext : new ko.bindingContext(viewModelOrBindingContext);
            }
            ko.applyBindingAccessorsToNode = function(node, bindings, viewModelOrBindingContext) {
              if (node.nodeType === 1)
                ko.virtualElements.normaliseVirtualElementDomStructure(node);
              return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
            };
            ko.applyBindingsToNode = function(node, bindings, viewModelOrBindingContext) {
              var context = getBindingContext(viewModelOrBindingContext);
              return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
            };
            ko.applyBindingsToDescendants = function(viewModelOrBindingContext, rootNode) {
              if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
                applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
            };
            ko.applyBindings = function(viewModelOrBindingContext, rootNode) {
              if (!jQueryInstance && window['jQuery']) {
                jQueryInstance = window['jQuery'];
              }
              if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
                throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
              rootNode = rootNode || window.document.body;
              applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
            };
            ko.contextFor = function(node) {
              switch (node.nodeType) {
                case 1:
                case 8:
                  var context = ko.storedBindingContextForNode(node);
                  if (context)
                    return context;
                  if (node.parentNode)
                    return ko.contextFor(node.parentNode);
                  break;
              }
              return undefined;
            };
            ko.dataFor = function(node) {
              var context = ko.contextFor(node);
              return context ? context['$data'] : undefined;
            };
            ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
            ko.exportSymbol('applyBindings', ko.applyBindings);
            ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
            ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
            ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
            ko.exportSymbol('contextFor', ko.contextFor);
            ko.exportSymbol('dataFor', ko.dataFor);
          })();
          (function(undefined) {
            var loadingSubscribablesCache = {},
                loadedDefinitionsCache = {};
            ko.components = {
              get: function(componentName, callback) {
                var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
                if (cachedDefinition) {
                  if (cachedDefinition.isSynchronousComponent) {
                    ko.dependencyDetection.ignore(function() {
                      callback(cachedDefinition.definition);
                    });
                  } else {
                    ko.tasks.schedule(function() {
                      callback(cachedDefinition.definition);
                    });
                  }
                } else {
                  loadComponentAndNotify(componentName, callback);
                }
              },
              clearCachedDefinition: function(componentName) {
                delete loadedDefinitionsCache[componentName];
              },
              _getFirstResultFromLoaders: getFirstResultFromLoaders
            };
            function getObjectOwnProperty(obj, propName) {
              return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
            }
            function loadComponentAndNotify(componentName, callback) {
              var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
                  completedAsync;
              if (!subscribable) {
                subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
                subscribable.subscribe(callback);
                beginLoadingComponent(componentName, function(definition, config) {
                  var isSynchronousComponent = !!(config && config['synchronous']);
                  loadedDefinitionsCache[componentName] = {
                    definition: definition,
                    isSynchronousComponent: isSynchronousComponent
                  };
                  delete loadingSubscribablesCache[componentName];
                  if (completedAsync || isSynchronousComponent) {
                    subscribable['notifySubscribers'](definition);
                  } else {
                    ko.tasks.schedule(function() {
                      subscribable['notifySubscribers'](definition);
                    });
                  }
                });
                completedAsync = true;
              } else {
                subscribable.subscribe(callback);
              }
            }
            function beginLoadingComponent(componentName, callback) {
              getFirstResultFromLoaders('getConfig', [componentName], function(config) {
                if (config) {
                  getFirstResultFromLoaders('loadComponent', [componentName, config], function(definition) {
                    callback(definition, config);
                  });
                } else {
                  callback(null, null);
                }
              });
            }
            function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
              if (!candidateLoaders) {
                candidateLoaders = ko.components['loaders'].slice(0);
              }
              var currentCandidateLoader = candidateLoaders.shift();
              if (currentCandidateLoader) {
                var methodInstance = currentCandidateLoader[methodName];
                if (methodInstance) {
                  var wasAborted = false,
                      synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function(result) {
                        if (wasAborted) {
                          callback(null);
                        } else if (result !== null) {
                          callback(result);
                        } else {
                          getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                        }
                      }));
                  if (synchronousReturnValue !== undefined) {
                    wasAborted = true;
                    if (!currentCandidateLoader['suppressLoaderExceptions']) {
                      throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                    }
                  }
                } else {
                  getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                }
              } else {
                callback(null);
              }
            }
            ko.components['loaders'] = [];
            ko.exportSymbol('components', ko.components);
            ko.exportSymbol('components.get', ko.components.get);
            ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
          })();
          (function(undefined) {
            var defaultConfigRegistry = {};
            ko.components.register = function(componentName, config) {
              if (!config) {
                throw new Error('Invalid configuration for ' + componentName);
              }
              if (ko.components.isRegistered(componentName)) {
                throw new Error('Component ' + componentName + ' is already registered');
              }
              defaultConfigRegistry[componentName] = config;
            };
            ko.components.isRegistered = function(componentName) {
              return defaultConfigRegistry.hasOwnProperty(componentName);
            };
            ko.components.unregister = function(componentName) {
              delete defaultConfigRegistry[componentName];
              ko.components.clearCachedDefinition(componentName);
            };
            ko.components.defaultLoader = {
              'getConfig': function(componentName, callback) {
                var result = defaultConfigRegistry.hasOwnProperty(componentName) ? defaultConfigRegistry[componentName] : null;
                callback(result);
              },
              'loadComponent': function(componentName, config, callback) {
                var errorCallback = makeErrorCallback(componentName);
                possiblyGetConfigFromAmd(errorCallback, config, function(loadedConfig) {
                  resolveConfig(componentName, errorCallback, loadedConfig, callback);
                });
              },
              'loadTemplate': function(componentName, templateConfig, callback) {
                resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
              },
              'loadViewModel': function(componentName, viewModelConfig, callback) {
                resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
              }
            };
            var createViewModelKey = 'createViewModel';
            function resolveConfig(componentName, errorCallback, config, callback) {
              var result = {},
                  makeCallBackWhenZero = 2,
                  tryIssueCallback = function() {
                    if (--makeCallBackWhenZero === 0) {
                      callback(result);
                    }
                  },
                  templateConfig = config['template'],
                  viewModelConfig = config['viewModel'];
              if (templateConfig) {
                possiblyGetConfigFromAmd(errorCallback, templateConfig, function(loadedConfig) {
                  ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function(resolvedTemplate) {
                    result['template'] = resolvedTemplate;
                    tryIssueCallback();
                  });
                });
              } else {
                tryIssueCallback();
              }
              if (viewModelConfig) {
                possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function(loadedConfig) {
                  ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function(resolvedViewModel) {
                    result[createViewModelKey] = resolvedViewModel;
                    tryIssueCallback();
                  });
                });
              } else {
                tryIssueCallback();
              }
            }
            function resolveTemplate(errorCallback, templateConfig, callback) {
              if (typeof templateConfig === 'string') {
                callback(ko.utils.parseHtmlFragment(templateConfig));
              } else if (templateConfig instanceof Array) {
                callback(templateConfig);
              } else if (isDocumentFragment(templateConfig)) {
                callback(ko.utils.makeArray(templateConfig.childNodes));
              } else if (templateConfig['element']) {
                var element = templateConfig['element'];
                if (isDomElement(element)) {
                  callback(cloneNodesFromTemplateSourceElement(element));
                } else if (typeof element === 'string') {
                  var elemInstance = document.getElementById(element);
                  if (elemInstance) {
                    callback(cloneNodesFromTemplateSourceElement(elemInstance));
                  } else {
                    errorCallback('Cannot find element with ID ' + element);
                  }
                } else {
                  errorCallback('Unknown element type: ' + element);
                }
              } else {
                errorCallback('Unknown template value: ' + templateConfig);
              }
            }
            function resolveViewModel(errorCallback, viewModelConfig, callback) {
              if (typeof viewModelConfig === 'function') {
                callback(function(params) {
                  return new viewModelConfig(params);
                });
              } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
                callback(viewModelConfig[createViewModelKey]);
              } else if ('instance' in viewModelConfig) {
                var fixedInstance = viewModelConfig['instance'];
                callback(function(params, componentInfo) {
                  return fixedInstance;
                });
              } else if ('viewModel' in viewModelConfig) {
                resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
              } else {
                errorCallback('Unknown viewModel value: ' + viewModelConfig);
              }
            }
            function cloneNodesFromTemplateSourceElement(elemInstance) {
              switch (ko.utils.tagNameLower(elemInstance)) {
                case 'script':
                  return ko.utils.parseHtmlFragment(elemInstance.text);
                case 'textarea':
                  return ko.utils.parseHtmlFragment(elemInstance.value);
                case 'template':
                  if (isDocumentFragment(elemInstance.content)) {
                    return ko.utils.cloneNodes(elemInstance.content.childNodes);
                  }
              }
              return ko.utils.cloneNodes(elemInstance.childNodes);
            }
            function isDomElement(obj) {
              if (window['HTMLElement']) {
                return obj instanceof HTMLElement;
              } else {
                return obj && obj.tagName && obj.nodeType === 1;
              }
            }
            function isDocumentFragment(obj) {
              if (window['DocumentFragment']) {
                return obj instanceof DocumentFragment;
              } else {
                return obj && obj.nodeType === 11;
              }
            }
            function possiblyGetConfigFromAmd(errorCallback, config, callback) {
              if (typeof config['require'] === 'string') {
                if (amdRequire || window['require']) {
                  (amdRequire || window['require'])([config['require']], callback);
                } else {
                  errorCallback('Uses require, but no AMD loader is present');
                }
              } else {
                callback(config);
              }
            }
            function makeErrorCallback(componentName) {
              return function(message) {
                throw new Error('Component \'' + componentName + '\': ' + message);
              };
            }
            ko.exportSymbol('components.register', ko.components.register);
            ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
            ko.exportSymbol('components.unregister', ko.components.unregister);
            ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);
            ko.components['loaders'].push(ko.components.defaultLoader);
            ko.components._allRegisteredComponents = defaultConfigRegistry;
          })();
          (function(undefined) {
            ko.components['getComponentNameForNode'] = function(node) {
              var tagNameLower = ko.utils.tagNameLower(node);
              if (ko.components.isRegistered(tagNameLower)) {
                if (tagNameLower.indexOf('-') != -1 || ('' + node) == "[object HTMLUnknownElement]" || (ko.utils.ieVersion <= 8 && node.tagName === tagNameLower)) {
                  return tagNameLower;
                }
              }
            };
            ko.components.addBindingsForCustomElement = function(allBindings, node, bindingContext, valueAccessors) {
              if (node.nodeType === 1) {
                var componentName = ko.components['getComponentNameForNode'](node);
                if (componentName) {
                  allBindings = allBindings || {};
                  if (allBindings['component']) {
                    throw new Error('Cannot use the "component" binding on a custom element matching a component');
                  }
                  var componentBindingValue = {
                    'name': componentName,
                    'params': getComponentParamsFromCustomElement(node, bindingContext)
                  };
                  allBindings['component'] = valueAccessors ? function() {
                    return componentBindingValue;
                  } : componentBindingValue;
                }
              }
              return allBindings;
            };
            var nativeBindingProviderInstance = new ko.bindingProvider();
            function getComponentParamsFromCustomElement(elem, bindingContext) {
              var paramsAttribute = elem.getAttribute('params');
              if (paramsAttribute) {
                var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, {
                  'valueAccessors': true,
                  'bindingParams': true
                }),
                    rawParamComputedValues = ko.utils.objectMap(params, function(paramValue, paramName) {
                      return ko.computed(paramValue, null, {disposeWhenNodeIsRemoved: elem});
                    }),
                    result = ko.utils.objectMap(rawParamComputedValues, function(paramValueComputed, paramName) {
                      var paramValue = paramValueComputed.peek();
                      if (!paramValueComputed.isActive()) {
                        return paramValue;
                      } else {
                        return ko.computed({
                          'read': function() {
                            return ko.utils.unwrapObservable(paramValueComputed());
                          },
                          'write': ko.isWriteableObservable(paramValue) && function(value) {
                            paramValueComputed()(value);
                          },
                          disposeWhenNodeIsRemoved: elem
                        });
                      }
                    });
                if (!result.hasOwnProperty('$raw')) {
                  result['$raw'] = rawParamComputedValues;
                }
                return result;
              } else {
                return {'$raw': {}};
              }
            }
            if (ko.utils.ieVersion < 9) {
              ko.components['register'] = (function(originalFunction) {
                return function(componentName) {
                  document.createElement(componentName);
                  return originalFunction.apply(this, arguments);
                };
              })(ko.components['register']);
              document.createDocumentFragment = (function(originalFunction) {
                return function() {
                  var newDocFrag = originalFunction(),
                      allComponents = ko.components._allRegisteredComponents;
                  for (var componentName in allComponents) {
                    if (allComponents.hasOwnProperty(componentName)) {
                      newDocFrag.createElement(componentName);
                    }
                  }
                  return newDocFrag;
                };
              })(document.createDocumentFragment);
            }
          })();
          (function(undefined) {
            var componentLoadingOperationUniqueId = 0;
            ko.bindingHandlers['component'] = {'init': function(element, valueAccessor, ignored1, ignored2, bindingContext) {
                var currentViewModel,
                    currentLoadingOperationId,
                    disposeAssociatedComponentViewModel = function() {
                      var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                      if (typeof currentViewModelDispose === 'function') {
                        currentViewModelDispose.call(currentViewModel);
                      }
                      currentViewModel = null;
                      currentLoadingOperationId = null;
                    },
                    originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));
                ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);
                ko.computed(function() {
                  var value = ko.utils.unwrapObservable(valueAccessor()),
                      componentName,
                      componentParams;
                  if (typeof value === 'string') {
                    componentName = value;
                  } else {
                    componentName = ko.utils.unwrapObservable(value['name']);
                    componentParams = ko.utils.unwrapObservable(value['params']);
                  }
                  if (!componentName) {
                    throw new Error('No component name specified');
                  }
                  var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                  ko.components.get(componentName, function(componentDefinition) {
                    if (currentLoadingOperationId !== loadingOperationId) {
                      return;
                    }
                    disposeAssociatedComponentViewModel();
                    if (!componentDefinition) {
                      throw new Error('Unknown component \'' + componentName + '\'');
                    }
                    cloneTemplateIntoElement(componentName, componentDefinition, element);
                    var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                        childBindingContext = bindingContext['createChildContext'](componentViewModel, undefined, function(ctx) {
                          ctx['$component'] = componentViewModel;
                          ctx['$componentTemplateNodes'] = originalChildNodes;
                        });
                    currentViewModel = componentViewModel;
                    ko.applyBindingsToDescendants(childBindingContext, element);
                  });
                }, null, {disposeWhenNodeIsRemoved: element});
                return {'controlsDescendantBindings': true};
              }};
            ko.virtualElements.allowedBindings['component'] = true;
            function cloneTemplateIntoElement(componentName, componentDefinition, element) {
              var template = componentDefinition['template'];
              if (!template) {
                throw new Error('Component \'' + componentName + '\' has no template');
              }
              var clonedNodesArray = ko.utils.cloneNodes(template);
              ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
            }
            function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
              var componentViewModelFactory = componentDefinition['createViewModel'];
              return componentViewModelFactory ? componentViewModelFactory.call(componentDefinition, componentParams, {
                'element': element,
                'templateNodes': originalChildNodes
              }) : componentParams;
            }
          })();
          var attrHtmlToJavascriptMap = {
            'class': 'className',
            'for': 'htmlFor'
          };
          ko.bindingHandlers['attr'] = {'update': function(element, valueAccessor, allBindings) {
              var value = ko.utils.unwrapObservable(valueAccessor()) || {};
              ko.utils.objectForEach(value, function(attrName, attrValue) {
                attrValue = ko.utils.unwrapObservable(attrValue);
                var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
                if (toRemove)
                  element.removeAttribute(attrName);
                if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                  attrName = attrHtmlToJavascriptMap[attrName];
                  if (toRemove)
                    element.removeAttribute(attrName);
                  else
                    element[attrName] = attrValue;
                } else if (!toRemove) {
                  element.setAttribute(attrName, attrValue.toString());
                }
                if (attrName === "name") {
                  ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
                }
              });
            }};
          (function() {
            ko.bindingHandlers['checked'] = {
              'after': ['value', 'attr'],
              'init': function(element, valueAccessor, allBindings) {
                var checkedValue = ko.pureComputed(function() {
                  if (allBindings['has']('checkedValue')) {
                    return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
                  } else if (allBindings['has']('value')) {
                    return ko.utils.unwrapObservable(allBindings.get('value'));
                  }
                  return element.value;
                });
                function updateModel() {
                  var isChecked = element.checked,
                      elemValue = useCheckedValue ? checkedValue() : isChecked;
                  if (ko.computedContext.isInitial()) {
                    return;
                  }
                  if (isRadio && !isChecked) {
                    return;
                  }
                  var modelValue = ko.dependencyDetection.ignore(valueAccessor);
                  if (valueIsArray) {
                    var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
                    if (oldElemValue !== elemValue) {
                      if (isChecked) {
                        ko.utils.addOrRemoveItem(writableValue, elemValue, true);
                        ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
                      }
                      oldElemValue = elemValue;
                    } else {
                      ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
                    }
                    if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
                      modelValue(writableValue);
                    }
                  } else {
                    ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
                  }
                }
                ;
                function updateView() {
                  var modelValue = ko.utils.unwrapObservable(valueAccessor());
                  if (valueIsArray) {
                    element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
                  } else if (isCheckbox) {
                    element.checked = modelValue;
                  } else {
                    element.checked = (checkedValue() === modelValue);
                  }
                }
                ;
                var isCheckbox = element.type == "checkbox",
                    isRadio = element.type == "radio";
                if (!isCheckbox && !isRadio) {
                  return;
                }
                var rawValue = valueAccessor(),
                    valueIsArray = isCheckbox && (ko.utils.unwrapObservable(rawValue) instanceof Array),
                    rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
                    oldElemValue = valueIsArray ? checkedValue() : undefined,
                    useCheckedValue = isRadio || valueIsArray;
                if (isRadio && !element.name)
                  ko.bindingHandlers['uniqueName']['init'](element, function() {
                    return true;
                  });
                ko.computed(updateModel, null, {disposeWhenNodeIsRemoved: element});
                ko.utils.registerEventHandler(element, "click", updateModel);
                ko.computed(updateView, null, {disposeWhenNodeIsRemoved: element});
                rawValue = undefined;
              }
            };
            ko.expressionRewriting.twoWayBindings['checked'] = true;
            ko.bindingHandlers['checkedValue'] = {'update': function(element, valueAccessor) {
                element.value = ko.utils.unwrapObservable(valueAccessor());
              }};
          })();
          var classesWrittenByBindingKey = '__ko__cssValue';
          ko.bindingHandlers['css'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              if (value !== null && typeof value == "object") {
                ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                  shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                  ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
                });
              } else {
                value = ko.utils.stringTrim(String(value || ''));
                ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
                element[classesWrittenByBindingKey] = value;
                ko.utils.toggleDomNodeCssClass(element, value, true);
              }
            }};
          ko.bindingHandlers['enable'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              if (value && element.disabled)
                element.removeAttribute("disabled");
              else if ((!value) && (!element.disabled))
                element.disabled = true;
            }};
          ko.bindingHandlers['disable'] = {'update': function(element, valueAccessor) {
              ko.bindingHandlers['enable']['update'](element, function() {
                return !ko.utils.unwrapObservable(valueAccessor());
              });
            }};
          function makeEventHandlerShortcut(eventName) {
            ko.bindingHandlers[eventName] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var newValueAccessor = function() {
                  var result = {};
                  result[eventName] = valueAccessor();
                  return result;
                };
                return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
              }};
          }
          ko.bindingHandlers['event'] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              var eventsToHandle = valueAccessor() || {};
              ko.utils.objectForEach(eventsToHandle, function(eventName) {
                if (typeof eventName == "string") {
                  ko.utils.registerEventHandler(element, eventName, function(event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                      return;
                    try {
                      var argsForHandler = ko.utils.makeArray(arguments);
                      viewModel = bindingContext['$data'];
                      argsForHandler.unshift(viewModel);
                      handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                      if (handlerReturnValue !== true) {
                        if (event.preventDefault)
                          event.preventDefault();
                        else
                          event.returnValue = false;
                      }
                    }
                    var bubble = allBindings.get(eventName + 'Bubble') !== false;
                    if (!bubble) {
                      event.cancelBubble = true;
                      if (event.stopPropagation)
                        event.stopPropagation();
                    }
                  });
                }
              });
            }};
          ko.bindingHandlers['foreach'] = {
            makeTemplateValueAccessor: function(valueAccessor) {
              return function() {
                var modelValue = valueAccessor(),
                    unwrappedValue = ko.utils.peekObservable(modelValue);
                if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                  return {
                    'foreach': modelValue,
                    'templateEngine': ko.nativeTemplateEngine.instance
                  };
                ko.utils.unwrapObservable(modelValue);
                return {
                  'foreach': unwrappedValue['data'],
                  'as': unwrappedValue['as'],
                  'includeDestroyed': unwrappedValue['includeDestroyed'],
                  'afterAdd': unwrappedValue['afterAdd'],
                  'beforeRemove': unwrappedValue['beforeRemove'],
                  'afterRender': unwrappedValue['afterRender'],
                  'beforeMove': unwrappedValue['beforeMove'],
                  'afterMove': unwrappedValue['afterMove'],
                  'templateEngine': ko.nativeTemplateEngine.instance
                };
              };
            },
            'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
            },
            'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
            }
          };
          ko.expressionRewriting.bindingRewriteValidators['foreach'] = false;
          ko.virtualElements.allowedBindings['foreach'] = true;
          var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
          var hasfocusLastValue = '__ko_hasfocusLastValue';
          ko.bindingHandlers['hasfocus'] = {
            'init': function(element, valueAccessor, allBindings) {
              var handleElementFocusChange = function(isFocused) {
                element[hasfocusUpdatingProperty] = true;
                var ownerDoc = element.ownerDocument;
                if ("activeElement" in ownerDoc) {
                  var active;
                  try {
                    active = ownerDoc.activeElement;
                  } catch (e) {
                    active = ownerDoc.body;
                  }
                  isFocused = (active === element);
                }
                var modelValue = valueAccessor();
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);
                element[hasfocusLastValue] = isFocused;
                element[hasfocusUpdatingProperty] = false;
              };
              var handleElementFocusIn = handleElementFocusChange.bind(null, true);
              var handleElementFocusOut = handleElementFocusChange.bind(null, false);
              ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
              ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn);
              ko.utils.registerEventHandler(element, "blur", handleElementFocusOut);
              ko.utils.registerEventHandler(element, "focusout", handleElementFocusOut);
            },
            'update': function(element, valueAccessor) {
              var value = !!ko.utils.unwrapObservable(valueAccessor());
              if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
                value ? element.focus() : element.blur();
                if (!value && element[hasfocusLastValue]) {
                  element.ownerDocument.body.focus();
                }
                ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
              }
            }
          };
          ko.expressionRewriting.twoWayBindings['hasfocus'] = true;
          ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus'];
          ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
          ko.bindingHandlers['html'] = {
            'init': function() {
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor) {
              ko.utils.setHtml(element, valueAccessor());
            }
          };
          function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
            ko.bindingHandlers[bindingKey] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var didDisplayOnLastUpdate,
                    savedNodes;
                ko.computed(function() {
                  var dataValue = ko.utils.unwrapObservable(valueAccessor()),
                      shouldDisplay = !isNot !== !dataValue,
                      isFirstRender = !savedNodes,
                      needsRefresh = isFirstRender || isWith || (shouldDisplay !== didDisplayOnLastUpdate);
                  if (needsRefresh) {
                    if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                      savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true);
                    }
                    if (shouldDisplay) {
                      if (!isFirstRender) {
                        ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                      }
                      ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                    } else {
                      ko.virtualElements.emptyNode(element);
                    }
                    didDisplayOnLastUpdate = shouldDisplay;
                  }
                }, null, {disposeWhenNodeIsRemoved: element});
                return {'controlsDescendantBindings': true};
              }};
            ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false;
            ko.virtualElements.allowedBindings[bindingKey] = true;
          }
          makeWithIfBinding('if');
          makeWithIfBinding('ifnot', false, true);
          makeWithIfBinding('with', true, false, function(bindingContext, dataValue) {
            return bindingContext['createChildContext'](dataValue);
          });
          var captionPlaceholder = {};
          ko.bindingHandlers['options'] = {
            'init': function(element) {
              if (ko.utils.tagNameLower(element) !== "select")
                throw new Error("options binding applies only to SELECT elements");
              while (element.length > 0) {
                element.remove(0);
              }
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor, allBindings) {
              function selectedOptions() {
                return ko.utils.arrayFilter(element.options, function(node) {
                  return node.selected;
                });
              }
              var selectWasPreviouslyEmpty = element.length == 0,
                  multiple = element.multiple,
                  previousScrollTop = (!selectWasPreviouslyEmpty && multiple) ? element.scrollTop : null,
                  unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
                  valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
                  includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
                  arrayToDomNodeChildrenOptions = {},
                  captionValue,
                  filteredArray,
                  previousSelectedValues = [];
              if (!valueAllowUnset) {
                if (multiple) {
                  previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
                } else if (element.selectedIndex >= 0) {
                  previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
                }
              }
              if (unwrappedArray) {
                if (typeof unwrappedArray.length == "undefined")
                  unwrappedArray = [unwrappedArray];
                filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                  return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                });
                if (allBindings['has']('optionsCaption')) {
                  captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                  if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                  }
                }
              } else {}
              function applyToObject(object, predicate, defaultValue) {
                var predicateType = typeof predicate;
                if (predicateType == "function")
                  return predicate(object);
                else if (predicateType == "string")
                  return object[predicate];
                else
                  return defaultValue;
              }
              var itemUpdate = false;
              function optionForArrayItem(arrayEntry, index, oldOptions) {
                if (oldOptions.length) {
                  previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ko.selectExtensions.readValue(oldOptions[0])] : [];
                  itemUpdate = true;
                }
                var option = element.ownerDocument.createElement("option");
                if (arrayEntry === captionPlaceholder) {
                  ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                  ko.selectExtensions.writeValue(option, undefined);
                } else {
                  var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                  ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));
                  var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                  ko.utils.setTextContent(option, optionText);
                }
                return [option];
              }
              arrayToDomNodeChildrenOptions['beforeRemove'] = function(option) {
                element.removeChild(option);
              };
              function setSelectionCallback(arrayEntry, newOptions) {
                if (itemUpdate && valueAllowUnset) {
                  ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true);
                } else if (previousSelectedValues.length) {
                  var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                  ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);
                  if (itemUpdate && !isSelected) {
                    ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                  }
                }
              }
              var callback = setSelectionCallback;
              if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
                callback = function(arrayEntry, newOptions) {
                  setSelectionCallback(arrayEntry, newOptions);
                  ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
                };
              }
              ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);
              ko.dependencyDetection.ignore(function() {
                if (valueAllowUnset) {
                  ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true);
                } else {
                  var selectionChanged;
                  if (multiple) {
                    selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                  } else {
                    selectionChanged = (previousSelectedValues.length && element.selectedIndex >= 0) ? (ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0]) : (previousSelectedValues.length || element.selectedIndex >= 0);
                  }
                  if (selectionChanged) {
                    ko.utils.triggerEvent(element, "change");
                  }
                }
              });
              ko.utils.ensureSelectElementIsRenderedCorrectly(element);
              if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
                element.scrollTop = previousScrollTop;
            }
          };
          ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
          ko.bindingHandlers['selectedOptions'] = {
            'after': ['options', 'foreach'],
            'init': function(element, valueAccessor, allBindings) {
              ko.utils.registerEventHandler(element, "change", function() {
                var value = valueAccessor(),
                    valueToWrite = [];
                ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                  if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
                });
                ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
              });
            },
            'update': function(element, valueAccessor) {
              if (ko.utils.tagNameLower(element) != "select")
                throw new Error("values binding applies only to SELECT elements");
              var newValue = ko.utils.unwrapObservable(valueAccessor()),
                  previousScrollTop = element.scrollTop;
              if (newValue && typeof newValue.length == "number") {
                ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                  var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                  if (node.selected != isSelected) {
                    ko.utils.setOptionNodeSelectionState(node, isSelected);
                  }
                });
              }
              element.scrollTop = previousScrollTop;
            }
          };
          ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
          ko.bindingHandlers['style'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor() || {});
              ko.utils.objectForEach(value, function(styleName, styleValue) {
                styleValue = ko.utils.unwrapObservable(styleValue);
                if (styleValue === null || styleValue === undefined || styleValue === false) {
                  styleValue = "";
                }
                element.style[styleName] = styleValue;
              });
            }};
          ko.bindingHandlers['submit'] = {'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
              if (typeof valueAccessor() != "function")
                throw new Error("The value for a submit binding must be a function");
              ko.utils.registerEventHandler(element, "submit", function(event) {
                var handlerReturnValue;
                var value = valueAccessor();
                try {
                  handlerReturnValue = value.call(bindingContext['$data'], element);
                } finally {
                  if (handlerReturnValue !== true) {
                    if (event.preventDefault)
                      event.preventDefault();
                    else
                      event.returnValue = false;
                  }
                }
              });
            }};
          ko.bindingHandlers['text'] = {
            'init': function() {
              return {'controlsDescendantBindings': true};
            },
            'update': function(element, valueAccessor) {
              ko.utils.setTextContent(element, valueAccessor());
            }
          };
          ko.virtualElements.allowedBindings['text'] = true;
          (function() {
            if (window && window.navigator) {
              var parseVersion = function(matches) {
                if (matches) {
                  return parseFloat(matches[1]);
                }
              };
              var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
                  userAgent = window.navigator.userAgent,
                  safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                  firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
            }
            if (ko.utils.ieVersion < 10) {
              var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
                  selectionChangeHandlerName = ko.utils.domData.nextKey();
              var selectionChangeHandler = function(event) {
                var target = this.activeElement,
                    handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
                if (handler) {
                  handler(event);
                }
              };
              var registerForSelectionChangeEvent = function(element, handler) {
                var ownerDoc = element.ownerDocument;
                if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
                  ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
                  ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
                }
                ko.utils.domData.set(element, selectionChangeHandlerName, handler);
              };
            }
            ko.bindingHandlers['textInput'] = {'init': function(element, valueAccessor, allBindings) {
                var previousElementValue = element.value,
                    timeoutHandle,
                    elementValueBeforeEvent;
                var updateModel = function(event) {
                  clearTimeout(timeoutHandle);
                  elementValueBeforeEvent = timeoutHandle = undefined;
                  var elementValue = element.value;
                  if (previousElementValue !== elementValue) {
                    if (DEBUG && event)
                      element['_ko_textInputProcessedEvent'] = event.type;
                    previousElementValue = elementValue;
                    ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
                  }
                };
                var deferUpdateModel = function(event) {
                  if (!timeoutHandle) {
                    elementValueBeforeEvent = element.value;
                    var handler = DEBUG ? updateModel.bind(element, {type: event.type}) : updateModel;
                    timeoutHandle = ko.utils.setTimeout(handler, 4);
                  }
                };
                var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;
                var updateView = function() {
                  var modelValue = ko.utils.unwrapObservable(valueAccessor());
                  if (modelValue === null || modelValue === undefined) {
                    modelValue = '';
                  }
                  if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                    ko.utils.setTimeout(updateView, 4);
                    return;
                  }
                  if (element.value !== modelValue) {
                    previousElementValue = modelValue;
                    element.value = modelValue;
                  }
                };
                var onEvent = function(event, handler) {
                  ko.utils.registerEventHandler(element, event, handler);
                };
                if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
                  ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function(eventName) {
                    if (eventName.slice(0, 5) == 'after') {
                      onEvent(eventName.slice(5), deferUpdateModel);
                    } else {
                      onEvent(eventName, updateModel);
                    }
                  });
                } else {
                  if (ko.utils.ieVersion < 10) {
                    onEvent('propertychange', function(event) {
                      if (event.propertyName === 'value') {
                        ieUpdateModel(event);
                      }
                    });
                    if (ko.utils.ieVersion == 8) {
                      onEvent('keyup', updateModel);
                      onEvent('keydown', updateModel);
                    }
                    if (ko.utils.ieVersion >= 8) {
                      registerForSelectionChangeEvent(element, ieUpdateModel);
                      onEvent('dragend', deferUpdateModel);
                    }
                  } else {
                    onEvent('input', updateModel);
                    if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                      onEvent('keydown', deferUpdateModel);
                      onEvent('paste', deferUpdateModel);
                      onEvent('cut', deferUpdateModel);
                    } else if (operaVersion < 11) {
                      onEvent('keydown', deferUpdateModel);
                    } else if (firefoxVersion < 4.0) {
                      onEvent('DOMAutoComplete', updateModel);
                      onEvent('dragdrop', updateModel);
                      onEvent('drop', updateModel);
                    }
                  }
                }
                onEvent('change', updateModel);
                ko.computed(updateView, null, {disposeWhenNodeIsRemoved: element});
              }};
            ko.expressionRewriting.twoWayBindings['textInput'] = true;
            ko.bindingHandlers['textinput'] = {'preprocess': function(value, name, addBinding) {
                addBinding('textInput', value);
              }};
          })();
          ko.bindingHandlers['uniqueName'] = {'init': function(element, valueAccessor) {
              if (valueAccessor()) {
                var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
                ko.utils.setElementName(element, name);
              }
            }};
          ko.bindingHandlers['uniqueName'].currentIndex = 0;
          ko.bindingHandlers['value'] = {
            'after': ['options', 'foreach'],
            'init': function(element, valueAccessor, allBindings) {
              if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
                ko.applyBindingAccessorsToNode(element, {'checkedValue': valueAccessor});
                return;
              }
              var eventsToCatch = ["change"];
              var requestedEventsToCatch = allBindings.get("valueUpdate");
              var propertyChangedFired = false;
              var elementValueBeforeEvent = null;
              if (requestedEventsToCatch) {
                if (typeof requestedEventsToCatch == "string")
                  requestedEventsToCatch = [requestedEventsToCatch];
                ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
                eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
              }
              var valueUpdateHandler = function() {
                elementValueBeforeEvent = null;
                propertyChangedFired = false;
                var modelValue = valueAccessor();
                var elementValue = ko.selectExtensions.readValue(element);
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
              };
              var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text" && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
              if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
                ko.utils.registerEventHandler(element, "propertychange", function() {
                  propertyChangedFired = true;
                });
                ko.utils.registerEventHandler(element, "focus", function() {
                  propertyChangedFired = false;
                });
                ko.utils.registerEventHandler(element, "blur", function() {
                  if (propertyChangedFired) {
                    valueUpdateHandler();
                  }
                });
              }
              ko.utils.arrayForEach(eventsToCatch, function(eventName) {
                var handler = valueUpdateHandler;
                if (ko.utils.stringStartsWith(eventName, "after")) {
                  handler = function() {
                    elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                    ko.utils.setTimeout(valueUpdateHandler, 0);
                  };
                  eventName = eventName.substring("after".length);
                }
                ko.utils.registerEventHandler(element, eventName, handler);
              });
              var updateFromModel = function() {
                var newValue = ko.utils.unwrapObservable(valueAccessor());
                var elementValue = ko.selectExtensions.readValue(element);
                if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                  ko.utils.setTimeout(updateFromModel, 0);
                  return;
                }
                var valueHasChanged = (newValue !== elementValue);
                if (valueHasChanged) {
                  if (ko.utils.tagNameLower(element) === "select") {
                    var allowUnset = allBindings.get('valueAllowUnset');
                    var applyValueAction = function() {
                      ko.selectExtensions.writeValue(element, newValue, allowUnset);
                    };
                    applyValueAction();
                    if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                      ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                    } else {
                      ko.utils.setTimeout(applyValueAction, 0);
                    }
                  } else {
                    ko.selectExtensions.writeValue(element, newValue);
                  }
                }
              };
              ko.computed(updateFromModel, null, {disposeWhenNodeIsRemoved: element});
            },
            'update': function() {}
          };
          ko.expressionRewriting.twoWayBindings['value'] = true;
          ko.bindingHandlers['visible'] = {'update': function(element, valueAccessor) {
              var value = ko.utils.unwrapObservable(valueAccessor());
              var isCurrentlyVisible = !(element.style.display == "none");
              if (value && !isCurrentlyVisible)
                element.style.display = "";
              else if ((!value) && isCurrentlyVisible)
                element.style.display = "none";
            }};
          makeEventHandlerShortcut('click');
          ko.templateEngine = function() {};
          ko.templateEngine.prototype['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            throw new Error("Override renderTemplateSource");
          };
          ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function(script) {
            throw new Error("Override createJavaScriptEvaluatorBlock");
          };
          ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
            if (typeof template == "string") {
              templateDocument = templateDocument || document;
              var elem = templateDocument.getElementById(template);
              if (!elem)
                throw new Error("Cannot find template with ID " + template);
              return new ko.templateSources.domElement(elem);
            } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
              return new ko.templateSources.anonymousTemplate(template);
            } else
              throw new Error("Unknown template type: " + template);
          };
          ko.templateEngine.prototype['renderTemplate'] = function(template, bindingContext, options, templateDocument) {
            var templateSource = this['makeTemplateSource'](template, templateDocument);
            return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
          };
          ko.templateEngine.prototype['isTemplateRewritten'] = function(template, templateDocument) {
            if (this['allowTemplateRewriting'] === false)
              return true;
            return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
          };
          ko.templateEngine.prototype['rewriteTemplate'] = function(template, rewriterCallback, templateDocument) {
            var templateSource = this['makeTemplateSource'](template, templateDocument);
            var rewritten = rewriterCallback(templateSource['text']());
            templateSource['text'](rewritten);
            templateSource['data']("isRewritten", true);
          };
          ko.exportSymbol('templateEngine', ko.templateEngine);
          ko.templateRewriting = (function() {
            var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
            var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
            function validateDataBindValuesForRewriting(keyValueArray) {
              var allValidators = ko.expressionRewriting.bindingRewriteValidators;
              for (var i = 0; i < keyValueArray.length; i++) {
                var key = keyValueArray[i]['key'];
                if (allValidators.hasOwnProperty(key)) {
                  var validator = allValidators[key];
                  if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                      throw new Error(possibleErrorMessage);
                  } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                  }
                }
              }
            }
            function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
              var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
              validateDataBindValuesForRewriting(dataBindKeyValueArray);
              var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {'valueAccessors': true});
              var applyBindingsToNextSiblingScript = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
              return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
            }
            return {
              ensureTemplateIsRewritten: function(template, templateEngine, templateDocument) {
                if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                  templateEngine['rewriteTemplate'](template, function(htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                  }, templateDocument);
              },
              memoizeBindingAttributeSyntax: function(htmlString, templateEngine) {
                return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function() {
                  return constructMemoizedTagReplacement(arguments[4], arguments[1], arguments[2], templateEngine);
                }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                  return constructMemoizedTagReplacement(arguments[1], "<!-- ko -->", "#comment", templateEngine);
                });
              },
              applyMemoizedBindingsToNextSibling: function(bindings, nodeName) {
                return ko.memoization.memoize(function(domNode, bindingContext) {
                  var nodeToBind = domNode.nextSibling;
                  if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                  }
                });
              }
            };
          })();
          ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
          (function() {
            ko.templateSources = {};
            var templateScript = 1,
                templateTextArea = 2,
                templateTemplate = 3,
                templateElement = 4;
            ko.templateSources.domElement = function(element) {
              this.domElement = element;
              if (element) {
                var tagNameLower = ko.utils.tagNameLower(element);
                this.templateType = tagNameLower === "script" ? templateScript : tagNameLower === "textarea" ? templateTextArea : tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate : templateElement;
              }
            };
            ko.templateSources.domElement.prototype['text'] = function() {
              var elemContentsProperty = this.templateType === templateScript ? "text" : this.templateType === templateTextArea ? "value" : "innerHTML";
              if (arguments.length == 0) {
                return this.domElement[elemContentsProperty];
              } else {
                var valueToWrite = arguments[0];
                if (elemContentsProperty === "innerHTML")
                  ko.utils.setHtml(this.domElement, valueToWrite);
                else
                  this.domElement[elemContentsProperty] = valueToWrite;
              }
            };
            var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
            ko.templateSources.domElement.prototype['data'] = function(key) {
              if (arguments.length === 1) {
                return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
              } else {
                ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
              }
            };
            var templatesDomDataKey = ko.utils.domData.nextKey();
            function getTemplateDomData(element) {
              return ko.utils.domData.get(element, templatesDomDataKey) || {};
            }
            function setTemplateDomData(element, data) {
              ko.utils.domData.set(element, templatesDomDataKey, data);
            }
            ko.templateSources.domElement.prototype['nodes'] = function() {
              var element = this.domElement;
              if (arguments.length == 0) {
                var templateData = getTemplateDomData(element),
                    containerData = templateData.containerData;
                return containerData || (this.templateType === templateTemplate ? element.content : this.templateType === templateElement ? element : undefined);
              } else {
                var valueToWrite = arguments[0];
                setTemplateDomData(element, {containerData: valueToWrite});
              }
            };
            ko.templateSources.anonymousTemplate = function(element) {
              this.domElement = element;
            };
            ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
            ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
            ko.templateSources.anonymousTemplate.prototype['text'] = function() {
              if (arguments.length == 0) {
                var templateData = getTemplateDomData(this.domElement);
                if (templateData.textData === undefined && templateData.containerData)
                  templateData.textData = templateData.containerData.innerHTML;
                return templateData.textData;
              } else {
                var valueToWrite = arguments[0];
                setTemplateDomData(this.domElement, {textData: valueToWrite});
              }
            };
            ko.exportSymbol('templateSources', ko.templateSources);
            ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
            ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
          })();
          (function() {
            var _templateEngine;
            ko.setTemplateEngine = function(templateEngine) {
              if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
                throw new Error("templateEngine must inherit from ko.templateEngine");
              _templateEngine = templateEngine;
            };
            function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
              var node,
                  nextInQueue = firstNode,
                  firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
              while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
                nextInQueue = ko.virtualElements.nextSibling(node);
                action(node, nextInQueue);
              }
            }
            function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
              if (continuousNodeArray.length) {
                var firstNode = continuousNodeArray[0],
                    lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                    parentNode = firstNode.parentNode,
                    provider = ko.bindingProvider['instance'],
                    preprocessNode = provider['preprocessNode'];
                if (preprocessNode) {
                  invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node, nextNodeInRange) {
                    var nodePreviousSibling = node.previousSibling;
                    var newNodes = preprocessNode.call(provider, node);
                    if (newNodes) {
                      if (node === firstNode)
                        firstNode = newNodes[0] || nextNodeInRange;
                      if (node === lastNode)
                        lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                    }
                  });
                  continuousNodeArray.length = 0;
                  if (!firstNode) {
                    return;
                  }
                  if (firstNode === lastNode) {
                    continuousNodeArray.push(firstNode);
                  } else {
                    continuousNodeArray.push(firstNode, lastNode);
                    ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                  }
                }
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                  if (node.nodeType === 1 || node.nodeType === 8)
                    ko.applyBindings(bindingContext, node);
                });
                invokeForEachNodeInContinuousRange(firstNode, lastNode, function(node) {
                  if (node.nodeType === 1 || node.nodeType === 8)
                    ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
                });
                ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
              }
            }
            function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
              return nodeOrNodeArray.nodeType ? nodeOrNodeArray : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0] : null;
            }
            function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
              options = options || {};
              var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
              var templateDocument = (firstTargetNode || template || {}).ownerDocument;
              var templateEngineToUse = (options['templateEngine'] || _templateEngine);
              ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
              var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);
              if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
                throw new Error("Template engine must return an array of DOM nodes");
              var haveAddedNodesToParent = false;
              switch (renderMode) {
                case "replaceChildren":
                  ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                  haveAddedNodesToParent = true;
                  break;
                case "replaceNode":
                  ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                  haveAddedNodesToParent = true;
                  break;
                case "ignoreTargetNode":
                  break;
                default:
                  throw new Error("Unknown renderMode: " + renderMode);
              }
              if (haveAddedNodesToParent) {
                activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
                if (options['afterRender'])
                  ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
              }
              return renderedNodesArray;
            }
            function resolveTemplateName(template, data, context) {
              if (ko.isObservable(template)) {
                return template();
              } else if (typeof template === 'function') {
                return template(data, context);
              } else {
                return template;
              }
            }
            ko.renderTemplate = function(template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
              options = options || {};
              if ((options['templateEngine'] || _templateEngine) == undefined)
                throw new Error("Set a template engine before calling renderTemplate");
              renderMode = renderMode || "replaceChildren";
              if (targetNodeOrNodeArray) {
                var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                var whenToDispose = function() {
                  return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode);
                };
                var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;
                return ko.dependentObservable(function() {
                  var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext)) ? dataOrBindingContext : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));
                  var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                      renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);
                  if (renderMode == "replaceNode") {
                    targetNodeOrNodeArray = renderedNodesArray;
                    firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                  }
                }, null, {
                  disposeWhen: whenToDispose,
                  disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved
                });
              } else {
                return ko.memoization.memoize(function(domNode) {
                  ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
                });
              }
            };
            ko.renderTemplateForEach = function(template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
              var arrayItemContext;
              var executeTemplateForArrayItem = function(arrayValue, index) {
                arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function(context) {
                  context['$index'] = index;
                });
                var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
                return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
              };
              var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
                activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
                if (options['afterRender'])
                  options['afterRender'](addedNodesArray, arrayValue);
                arrayItemContext = null;
              };
              return ko.dependentObservable(function() {
                var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
                if (typeof unwrappedArray.length == "undefined")
                  unwrappedArray = [unwrappedArray];
                var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                  return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                });
                ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);
              }, null, {disposeWhenNodeIsRemoved: targetNode});
            };
            var templateComputedDomDataKey = ko.utils.domData.nextKey();
            function disposeOldComputedAndStoreNewOne(element, newComputed) {
              var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
              if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
                oldComputed.dispose();
              ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
            }
            ko.bindingHandlers['template'] = {
              'init': function(element, valueAccessor) {
                var bindingValue = ko.utils.unwrapObservable(valueAccessor());
                if (typeof bindingValue == "string" || bindingValue['name']) {
                  ko.virtualElements.emptyNode(element);
                } else if ('nodes' in bindingValue) {
                  var nodes = bindingValue['nodes'] || [];
                  if (ko.isObservable(nodes)) {
                    throw new Error('The "nodes" option must be a plain, non-observable array.');
                  }
                  var container = ko.utils.moveCleanedNodesToContainerElement(nodes);
                  new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                } else {
                  var templateNodes = ko.virtualElements.childNodes(element),
                      container = ko.utils.moveCleanedNodesToContainerElement(templateNodes);
                  new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                }
                return {'controlsDescendantBindings': true};
              },
              'update': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                var value = valueAccessor(),
                    dataValue,
                    options = ko.utils.unwrapObservable(value),
                    shouldDisplay = true,
                    templateComputed = null,
                    templateName;
                if (typeof options == "string") {
                  templateName = value;
                  options = {};
                } else {
                  templateName = options['name'];
                  if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                  if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
                  dataValue = ko.utils.unwrapObservable(options['data']);
                }
                if ('foreach' in options) {
                  var dataArray = (shouldDisplay && options['foreach']) || [];
                  templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
                } else if (!shouldDisplay) {
                  ko.virtualElements.emptyNode(element);
                } else {
                  var innerBindingContext = ('data' in options) ? bindingContext['createChildContext'](dataValue, options['as']) : bindingContext;
                  templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
                }
                disposeOldComputedAndStoreNewOne(element, templateComputed);
              }
            };
            ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
              var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);
              if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
                return null;
              if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
                return null;
              return "This template engine does not support anonymous templates nested within its templates";
            };
            ko.virtualElements.allowedBindings['template'] = true;
          })();
          ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
          ko.exportSymbol('renderTemplate', ko.renderTemplate);
          ko.utils.findMovesInArrayComparison = function(left, right, limitFailedCompares) {
            if (left.length && right.length) {
              var failedCompares,
                  l,
                  r,
                  leftItem,
                  rightItem;
              for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
                for (r = 0; rightItem = right[r]; ++r) {
                  if (leftItem['value'] === rightItem['value']) {
                    leftItem['moved'] = rightItem['index'];
                    rightItem['moved'] = leftItem['index'];
                    right.splice(r, 1);
                    failedCompares = r = 0;
                    break;
                  }
                }
                failedCompares += r;
              }
            }
          };
          ko.utils.compareArrays = (function() {
            var statusNotInOld = 'added',
                statusNotInNew = 'deleted';
            function compareArrays(oldArray, newArray, options) {
              options = (typeof options === 'boolean') ? {'dontLimitMoves': options} : (options || {});
              oldArray = oldArray || [];
              newArray = newArray || [];
              if (oldArray.length < newArray.length)
                return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);
              else
                return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
            }
            function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
              var myMin = Math.min,
                  myMax = Math.max,
                  editDistanceMatrix = [],
                  smlIndex,
                  smlIndexMax = smlArray.length,
                  bigIndex,
                  bigIndexMax = bigArray.length,
                  compareRange = (bigIndexMax - smlIndexMax) || 1,
                  maxDistance = smlIndexMax + bigIndexMax + 1,
                  thisRow,
                  lastRow,
                  bigIndexMaxForRow,
                  bigIndexMinForRow;
              for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
                lastRow = thisRow;
                editDistanceMatrix.push(thisRow = []);
                bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
                bigIndexMinForRow = myMax(0, smlIndex - 1);
                for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                  if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                  else if (!smlIndex)
                    thisRow[bigIndex] = bigIndex + 1;
                  else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];
                  else {
                    var northDistance = lastRow[bigIndex] || maxDistance;
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                  }
                }
              }
              var editScript = [],
                  meMinusOne,
                  notInSml = [],
                  notInBig = [];
              for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex; ) {
                meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
                if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex - 1]) {
                  notInSml.push(editScript[editScript.length] = {
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex
                  });
                } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                  notInBig.push(editScript[editScript.length] = {
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex
                  });
                } else {
                  --bigIndex;
                  --smlIndex;
                  if (!options['sparse']) {
                    editScript.push({
                      'status': "retained",
                      'value': bigArray[bigIndex]
                    });
                  }
                }
              }
              ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);
              return editScript.reverse();
            }
            return compareArrays;
          })();
          ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
          (function() {
            function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
              var mappedNodes = [];
              var dependentObservable = ko.dependentObservable(function() {
                var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];
                if (mappedNodes.length > 0) {
                  ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                  if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
                }
                mappedNodes.length = 0;
                ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
              }, null, {
                disposeWhenNodeIsRemoved: containerNode,
                disposeWhen: function() {
                  return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);
                }
              });
              return {
                mappedNodes: mappedNodes,
                dependentObservable: (dependentObservable.isActive() ? dependentObservable : undefined)
              };
            }
            var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
                deletedItemDummyValue = ko.utils.domData.nextKey();
            ko.utils.setDomNodeChildrenFromArrayMapping = function(domNode, array, mapping, options, callbackAfterAddingNodes) {
              array = array || [];
              options = options || {};
              var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
              var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
              var lastArray = ko.utils.arrayMap(lastMappingResult, function(x) {
                return x.arrayEntry;
              });
              var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);
              var newMappingResult = [];
              var lastMappingResultIndex = 0;
              var newMappingResultIndex = 0;
              var nodesToDelete = [];
              var itemsToProcess = [];
              var itemsForBeforeRemoveCallbacks = [];
              var itemsForMoveCallbacks = [];
              var itemsForAfterAddCallbacks = [];
              var mapData;
              function itemMovedOrRetained(editScriptIndex, oldPosition) {
                mapData = lastMappingResult[oldPosition];
                if (newMappingResultIndex !== oldPosition)
                  itemsForMoveCallbacks[editScriptIndex] = mapData;
                mapData.indexObservable(newMappingResultIndex++);
                ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
                newMappingResult.push(mapData);
                itemsToProcess.push(mapData);
              }
              function callCallback(callback, items) {
                if (callback) {
                  for (var i = 0,
                      n = items.length; i < n; i++) {
                    if (items[i]) {
                      ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                        callback(node, i, items[i].arrayEntry);
                      });
                    }
                  }
                }
              }
              for (var i = 0,
                  editScriptItem,
                  movedIndex; editScriptItem = editScript[i]; i++) {
                movedIndex = editScriptItem['moved'];
                switch (editScriptItem['status']) {
                  case "deleted":
                    if (movedIndex === undefined) {
                      mapData = lastMappingResult[lastMappingResultIndex];
                      if (mapData.dependentObservable) {
                        mapData.dependentObservable.dispose();
                        mapData.dependentObservable = undefined;
                      }
                      if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
                        if (options['beforeRemove']) {
                          newMappingResult.push(mapData);
                          itemsToProcess.push(mapData);
                          if (mapData.arrayEntry === deletedItemDummyValue) {
                            mapData = null;
                          } else {
                            itemsForBeforeRemoveCallbacks[i] = mapData;
                          }
                        }
                        if (mapData) {
                          nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
                        }
                      }
                    }
                    lastMappingResultIndex++;
                    break;
                  case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;
                  case "added":
                    if (movedIndex !== undefined) {
                      itemMovedOrRetained(i, movedIndex);
                    } else {
                      mapData = {
                        arrayEntry: editScriptItem['value'],
                        indexObservable: ko.observable(newMappingResultIndex++)
                      };
                      newMappingResult.push(mapData);
                      itemsToProcess.push(mapData);
                      if (!isFirstExecution)
                        itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
                }
              }
              ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
              callCallback(options['beforeMove'], itemsForMoveCallbacks);
              ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);
              for (var i = 0,
                  nextNode = ko.virtualElements.firstChild(domNode),
                  lastNode,
                  node; mapData = itemsToProcess[i]; i++) {
                if (!mapData.mappedNodes)
                  ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));
                for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                  if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
                }
                if (!mapData.initialized && callbackAfterAddingNodes) {
                  callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                  mapData.initialized = true;
                }
              }
              callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);
              for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
                if (itemsForBeforeRemoveCallbacks[i]) {
                  itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
                }
              }
              callCallback(options['afterMove'], itemsForMoveCallbacks);
              callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
            };
          })();
          ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
          ko.nativeTemplateEngine = function() {
            this['allowTemplateRewriting'] = false;
          };
          ko.nativeTemplateEngine.prototype = new ko.templateEngine();
          ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
          ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
            var useNodesIfAvailable = !(ko.utils.ieVersion < 9),
                templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
                templateNodes = templateNodesFunc ? templateSource['nodes']() : null;
            if (templateNodes) {
              return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
            } else {
              var templateText = templateSource['text']();
              return ko.utils.parseHtmlFragment(templateText, templateDocument);
            }
          };
          ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
          ko.setTemplateEngine(ko.nativeTemplateEngine.instance);
          ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
          (function() {
            ko.jqueryTmplTemplateEngine = function() {
              var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
                if (!jQueryInstance || !(jQueryInstance['tmpl']))
                  return 0;
                try {
                  if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    return 2;
                  }
                } catch (ex) {}
                return 1;
              })();
              function ensureHasReferencedJQueryTemplates() {
                if (jQueryTmplVersion < 2)
                  throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
              }
              function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
                return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
              }
              this['renderTemplateSource'] = function(templateSource, bindingContext, options, templateDocument) {
                templateDocument = templateDocument || document;
                options = options || {};
                ensureHasReferencedJQueryTemplates();
                var precompiled = templateSource['data']('precompiled');
                if (!precompiled) {
                  var templateText = templateSource['text']() || "";
                  templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";
                  precompiled = jQueryInstance['template'](null, templateText);
                  templateSource['data']('precompiled', precompiled);
                }
                var data = [bindingContext['$data']];
                var jQueryTemplateOptions = jQueryInstance['extend']({'koBindingContext': bindingContext}, options['templateOptions']);
                var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
                resultNodes['appendTo'](templateDocument.createElement("div"));
                jQueryInstance['fragments'] = {};
                return resultNodes;
              };
              this['createJavaScriptEvaluatorBlock'] = function(script) {
                return "{{ko_code ((function() { return " + script + " })()) }}";
              };
              this['addTemplate'] = function(templateName, templateMarkup) {
                document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
              };
              if (jQueryTmplVersion > 0) {
                jQueryInstance['tmpl']['tag']['ko_code'] = {open: "__.push($1 || '');"};
                jQueryInstance['tmpl']['tag']['ko_with'] = {
                  open: "with($1) {",
                  close: "} "
                };
              }
            };
            ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
            ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;
            var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
            if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
              ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);
            ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
          })();
        }));
      }());
    })();
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:knockout/knockout@3.4.0.js", ["github:knockout/knockout@3.4.0/dist/knockout.debug.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:knockout/knockout@3.4.0/dist/knockout.debug.js');
  global.define = __define;
  return module.exports;
});

System.register("src/components/search.scss!github:theefer/plugin-sass@master.js", [], function() { return { setters: [], execute: function() {} } });

System.registerDynamic("github:components/handlebars.js@4.0.5/handlebars.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, "Handlebars", null);
  (function() {
    "format global";
    "exports Handlebars";
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
      else if (typeof define === 'function' && define.amd)
        define([], factory);
      else if (typeof exports === 'object')
        exports["Handlebars"] = factory();
      else
        root["Handlebars"] = factory();
    })(this, function() {
      return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
          };
          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          module.loaded = true;
          return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      })([function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _handlebarsRuntime = __webpack_require__(2);
        var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
        var _handlebarsCompilerAst = __webpack_require__(21);
        var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
        var _handlebarsCompilerBase = __webpack_require__(22);
        var _handlebarsCompilerCompiler = __webpack_require__(27);
        var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);
        var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
        var _handlebarsCompilerVisitor = __webpack_require__(25);
        var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
        var _handlebarsNoConflict = __webpack_require__(20);
        var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
        var _create = _handlebarsRuntime2['default'].create;
        function create() {
          var hb = _create();
          hb.compile = function(input, options) {
            return _handlebarsCompilerCompiler.compile(input, options, hb);
          };
          hb.precompile = function(input, options) {
            return _handlebarsCompilerCompiler.precompile(input, options, hb);
          };
          hb.AST = _handlebarsCompilerAst2['default'];
          hb.Compiler = _handlebarsCompilerCompiler.Compiler;
          hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
          hb.Parser = _handlebarsCompilerBase.parser;
          hb.parse = _handlebarsCompilerBase.parse;
          return hb;
        }
        var inst = create();
        inst.create = create;
        _handlebarsNoConflict2['default'](inst);
        inst.Visitor = _handlebarsCompilerVisitor2['default'];
        inst['default'] = inst;
        exports['default'] = inst;
        module.exports = exports['default'];
      }, function(module, exports) {
        "use strict";
        exports["default"] = function(obj) {
          return obj && obj.__esModule ? obj : {"default": obj};
        };
        exports.__esModule = true;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _handlebarsBase = __webpack_require__(4);
        var base = _interopRequireWildcard(_handlebarsBase);
        var _handlebarsSafeString = __webpack_require__(18);
        var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
        var _handlebarsException = __webpack_require__(6);
        var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
        var _handlebarsUtils = __webpack_require__(5);
        var Utils = _interopRequireWildcard(_handlebarsUtils);
        var _handlebarsRuntime = __webpack_require__(19);
        var runtime = _interopRequireWildcard(_handlebarsRuntime);
        var _handlebarsNoConflict = __webpack_require__(20);
        var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
        function create() {
          var hb = new base.HandlebarsEnvironment();
          Utils.extend(hb, base);
          hb.SafeString = _handlebarsSafeString2['default'];
          hb.Exception = _handlebarsException2['default'];
          hb.Utils = Utils;
          hb.escapeExpression = Utils.escapeExpression;
          hb.VM = runtime;
          hb.template = function(spec) {
            return runtime.template(spec, hb);
          };
          return hb;
        }
        var inst = create();
        inst.create = create;
        _handlebarsNoConflict2['default'](inst);
        inst['default'] = inst;
        exports['default'] = inst;
        module.exports = exports['default'];
      }, function(module, exports) {
        "use strict";
        exports["default"] = function(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj["default"] = obj;
            return newObj;
          }
        };
        exports.__esModule = true;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.HandlebarsEnvironment = HandlebarsEnvironment;
        var _utils = __webpack_require__(5);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _helpers = __webpack_require__(7);
        var _decorators = __webpack_require__(15);
        var _logger = __webpack_require__(17);
        var _logger2 = _interopRequireDefault(_logger);
        var VERSION = '4.0.5';
        exports.VERSION = VERSION;
        var COMPILER_REVISION = 7;
        exports.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
          1: '<= 1.0.rc.2',
          2: '== 1.0.0-rc.3',
          3: '== 1.0.0-rc.4',
          4: '== 1.x.x',
          5: '== 2.0.0-alpha.x',
          6: '>= 2.0.0-beta.1',
          7: '>= 4.0.0'
        };
        exports.REVISION_CHANGES = REVISION_CHANGES;
        var objectType = '[object Object]';
        function HandlebarsEnvironment(helpers, partials, decorators) {
          this.helpers = helpers || {};
          this.partials = partials || {};
          this.decorators = decorators || {};
          _helpers.registerDefaultHelpers(this);
          _decorators.registerDefaultDecorators(this);
        }
        HandlebarsEnvironment.prototype = {
          constructor: HandlebarsEnvironment,
          logger: _logger2['default'],
          log: _logger2['default'].log,
          registerHelper: function registerHelper(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple helpers');
              }
              _utils.extend(this.helpers, name);
            } else {
              this.helpers[name] = fn;
            }
          },
          unregisterHelper: function unregisterHelper(name) {
            delete this.helpers[name];
          },
          registerPartial: function registerPartial(name, partial) {
            if (_utils.toString.call(name) === objectType) {
              _utils.extend(this.partials, name);
            } else {
              if (typeof partial === 'undefined') {
                throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
              }
              this.partials[name] = partial;
            }
          },
          unregisterPartial: function unregisterPartial(name) {
            delete this.partials[name];
          },
          registerDecorator: function registerDecorator(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple decorators');
              }
              _utils.extend(this.decorators, name);
            } else {
              this.decorators[name] = fn;
            }
          },
          unregisterDecorator: function unregisterDecorator(name) {
            delete this.decorators[name];
          }
        };
        var log = _logger2['default'].log;
        exports.log = log;
        exports.createFrame = _utils.createFrame;
        exports.logger = _logger2['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports.extend = extend;
        exports.indexOf = indexOf;
        exports.escapeExpression = escapeExpression;
        exports.isEmpty = isEmpty;
        exports.createFrame = createFrame;
        exports.blockParams = blockParams;
        exports.appendContextPath = appendContextPath;
        var escape = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
          '=': '&#x3D;'
        };
        var badChars = /[&<>"'`=]/g,
            possible = /[&<>"'`=]/;
        function escapeChar(chr) {
          return escape[chr];
        }
        function extend(obj) {
          for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
              if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
              }
            }
          }
          return obj;
        }
        var toString = Object.prototype.toString;
        exports.toString = toString;
        var isFunction = function isFunction(value) {
          return typeof value === 'function';
        };
        if (isFunction(/x/)) {
          exports.isFunction = isFunction = function(value) {
            return typeof value === 'function' && toString.call(value) === '[object Function]';
          };
        }
        exports.isFunction = isFunction;
        var isArray = Array.isArray || function(value) {
          return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
        };
        exports.isArray = isArray;
        function indexOf(array, value) {
          for (var i = 0,
              len = array.length; i < len; i++) {
            if (array[i] === value) {
              return i;
            }
          }
          return -1;
        }
        function escapeExpression(string) {
          if (typeof string !== 'string') {
            if (string && string.toHTML) {
              return string.toHTML();
            } else if (string == null) {
              return '';
            } else if (!string) {
              return string + '';
            }
            string = '' + string;
          }
          if (!possible.test(string)) {
            return string;
          }
          return string.replace(badChars, escapeChar);
        }
        function isEmpty(value) {
          if (!value && value !== 0) {
            return true;
          } else if (isArray(value) && value.length === 0) {
            return true;
          } else {
            return false;
          }
        }
        function createFrame(object) {
          var frame = extend({}, object);
          frame._parent = object;
          return frame;
        }
        function blockParams(params, ids) {
          params.path = ids;
          return params;
        }
        function appendContextPath(contextPath, id) {
          return (contextPath ? contextPath + '.' : '') + id;
        }
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
        function Exception(message, node) {
          var loc = node && node.loc,
              line = undefined,
              column = undefined;
          if (loc) {
            line = loc.start.line;
            column = loc.start.column;
            message += ' - ' + line + ':' + column;
          }
          var tmp = Error.prototype.constructor.call(this, message);
          for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
          }
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Exception);
          }
          if (loc) {
            this.lineNumber = line;
            this.column = column;
          }
        }
        Exception.prototype = new Error();
        exports['default'] = Exception;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.registerDefaultHelpers = registerDefaultHelpers;
        var _helpersBlockHelperMissing = __webpack_require__(8);
        var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
        var _helpersEach = __webpack_require__(9);
        var _helpersEach2 = _interopRequireDefault(_helpersEach);
        var _helpersHelperMissing = __webpack_require__(10);
        var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
        var _helpersIf = __webpack_require__(11);
        var _helpersIf2 = _interopRequireDefault(_helpersIf);
        var _helpersLog = __webpack_require__(12);
        var _helpersLog2 = _interopRequireDefault(_helpersLog);
        var _helpersLookup = __webpack_require__(13);
        var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
        var _helpersWith = __webpack_require__(14);
        var _helpersWith2 = _interopRequireDefault(_helpersWith);
        function registerDefaultHelpers(instance) {
          _helpersBlockHelperMissing2['default'](instance);
          _helpersEach2['default'](instance);
          _helpersHelperMissing2['default'](instance);
          _helpersIf2['default'](instance);
          _helpersLog2['default'](instance);
          _helpersLookup2['default'](instance);
          _helpersWith2['default'](instance);
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('blockHelperMissing', function(context, options) {
            var inverse = options.inverse,
                fn = options.fn;
            if (context === true) {
              return fn(this);
            } else if (context === false || context == null) {
              return inverse(this);
            } else if (_utils.isArray(context)) {
              if (context.length > 0) {
                if (options.ids) {
                  options.ids = [options.name];
                }
                return instance.helpers.each(context, options);
              } else {
                return inverse(this);
              }
            } else {
              if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {data: data};
              }
              return fn(context, options);
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function(instance) {
          instance.registerHelper('each', function(context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }
            var fn = options.fn,
                inverse = options.inverse,
                i = 0,
                ret = '',
                data = undefined,
                contextPath = undefined;
            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            if (options.data) {
              data = _utils.createFrame(options.data);
            }
            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }
              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }
            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else {
                var priorKey = undefined;
                for (var key in context) {
                  if (context.hasOwnProperty(key)) {
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }
                    priorKey = key;
                    i++;
                  }
                }
                if (priorKey !== undefined) {
                  execIteration(priorKey, i - 1, true);
                }
              }
            }
            if (i === 0) {
              ret = inverse(this);
            }
            return ret;
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function(instance) {
          instance.registerHelper('helperMissing', function() {
            if (arguments.length === 1) {
              return undefined;
            } else {
              throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('if', function(conditional, options) {
            if (_utils.isFunction(conditional)) {
              conditional = conditional.call(this);
            }
            if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
              return options.inverse(this);
            } else {
              return options.fn(this);
            }
          });
          instance.registerHelper('unless', function(conditional, options) {
            return instance.helpers['if'].call(this, conditional, {
              fn: options.inverse,
              inverse: options.fn,
              hash: options.hash
            });
          });
        };
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports['default'] = function(instance) {
          instance.registerHelper('log', function() {
            var args = [undefined],
                options = arguments[arguments.length - 1];
            for (var i = 0; i < arguments.length - 1; i++) {
              args.push(arguments[i]);
            }
            var level = 1;
            if (options.hash.level != null) {
              level = options.hash.level;
            } else if (options.data && options.data.level != null) {
              level = options.data.level;
            }
            args[0] = level;
            instance.log.apply(instance, args);
          });
        };
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports['default'] = function(instance) {
          instance.registerHelper('lookup', function(obj, field) {
            return obj && obj[field];
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('with', function(context, options) {
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            var fn = options.fn;
            if (!_utils.isEmpty(context)) {
              var data = options.data;
              if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
              }
              return fn(context, {
                data: data,
                blockParams: _utils.blockParams([context], [data && data.contextPath])
              });
            } else {
              return options.inverse(this);
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.registerDefaultDecorators = registerDefaultDecorators;
        var _decoratorsInline = __webpack_require__(16);
        var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
        function registerDefaultDecorators(instance) {
          _decoratorsInline2['default'](instance);
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerDecorator('inline', function(fn, props, container, options) {
            var ret = fn;
            if (!props.partials) {
              props.partials = {};
              ret = function(context, options) {
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
              };
            }
            props.partials[options.args[0]] = options.fn;
            return ret;
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var logger = {
          methodMap: ['debug', 'info', 'warn', 'error'],
          level: 'info',
          lookupLevel: function lookupLevel(level) {
            if (typeof level === 'string') {
              var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
              if (levelMap >= 0) {
                level = levelMap;
              } else {
                level = parseInt(level, 10);
              }
            }
            return level;
          },
          log: function log(level) {
            level = logger.lookupLevel(level);
            if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
              var method = logger.methodMap[level];
              if (!console[method]) {
                method = 'log';
              }
              for (var _len = arguments.length,
                  message = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1; _key < _len; _key++) {
                message[_key - 1] = arguments[_key];
              }
              console[method].apply(console, message);
            }
          }
        };
        exports['default'] = logger;
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        function SafeString(string) {
          this.string = string;
        }
        SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
          return '' + this.string;
        };
        exports['default'] = SafeString;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.checkRevision = checkRevision;
        exports.template = template;
        exports.wrapProgram = wrapProgram;
        exports.resolvePartial = resolvePartial;
        exports.invokePartial = invokePartial;
        exports.noop = noop;
        var _utils = __webpack_require__(5);
        var Utils = _interopRequireWildcard(_utils);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _base = __webpack_require__(4);
        function checkRevision(compilerInfo) {
          var compilerRevision = compilerInfo && compilerInfo[0] || 1,
              currentRevision = _base.COMPILER_REVISION;
          if (compilerRevision !== currentRevision) {
            if (compilerRevision < currentRevision) {
              var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                  compilerVersions = _base.REVISION_CHANGES[compilerRevision];
              throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
            } else {
              throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
            }
          }
        }
        function template(templateSpec, env) {
          if (!env) {
            throw new _exception2['default']('No environment passed to template');
          }
          if (!templateSpec || !templateSpec.main) {
            throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
          }
          templateSpec.main.decorator = templateSpec.main_d;
          env.VM.checkRevision(templateSpec.compiler);
          function invokePartialWrapper(partial, context, options) {
            if (options.hash) {
              context = Utils.extend({}, context, options.hash);
              if (options.ids) {
                options.ids[0] = true;
              }
            }
            partial = env.VM.resolvePartial.call(this, partial, context, options);
            var result = env.VM.invokePartial.call(this, partial, context, options);
            if (result == null && env.compile) {
              options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
              result = options.partials[options.name](context, options);
            }
            if (result != null) {
              if (options.indent) {
                var lines = result.split('\n');
                for (var i = 0,
                    l = lines.length; i < l; i++) {
                  if (!lines[i] && i + 1 === l) {
                    break;
                  }
                  lines[i] = options.indent + lines[i];
                }
                result = lines.join('\n');
              }
              return result;
            } else {
              throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
            }
          }
          var container = {
            strict: function strict(obj, name) {
              if (!(name in obj)) {
                throw new _exception2['default']('"' + name + '" not defined in ' + obj);
              }
              return obj[name];
            },
            lookup: function lookup(depths, name) {
              var len = depths.length;
              for (var i = 0; i < len; i++) {
                if (depths[i] && depths[i][name] != null) {
                  return depths[i][name];
                }
              }
            },
            lambda: function lambda(current, context) {
              return typeof current === 'function' ? current.call(context) : current;
            },
            escapeExpression: Utils.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function fn(i) {
              var ret = templateSpec[i];
              ret.decorator = templateSpec[i + '_d'];
              return ret;
            },
            programs: [],
            program: function program(i, data, declaredBlockParams, blockParams, depths) {
              var programWrapper = this.programs[i],
                  fn = this.fn(i);
              if (data || depths || blockParams || declaredBlockParams) {
                programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
              } else if (!programWrapper) {
                programWrapper = this.programs[i] = wrapProgram(this, i, fn);
              }
              return programWrapper;
            },
            data: function data(value, depth) {
              while (value && depth--) {
                value = value._parent;
              }
              return value;
            },
            merge: function merge(param, common) {
              var obj = param || common;
              if (param && common && param !== common) {
                obj = Utils.extend({}, common, param);
              }
              return obj;
            },
            noop: env.VM.noop,
            compilerInfo: templateSpec.compiler
          };
          function ret(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var data = options.data;
            ret._setup(options);
            if (!options.partial && templateSpec.useData) {
              data = initData(context, data);
            }
            var depths = undefined,
                blockParams = templateSpec.useBlockParams ? [] : undefined;
            if (templateSpec.useDepths) {
              if (options.depths) {
                depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
              } else {
                depths = [context];
              }
            }
            function main(context) {
              return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
            }
            main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
            return main(context, options);
          }
          ret.isTop = true;
          ret._setup = function(options) {
            if (!options.partial) {
              container.helpers = container.merge(options.helpers, env.helpers);
              if (templateSpec.usePartial) {
                container.partials = container.merge(options.partials, env.partials);
              }
              if (templateSpec.usePartial || templateSpec.useDecorators) {
                container.decorators = container.merge(options.decorators, env.decorators);
              }
            } else {
              container.helpers = options.helpers;
              container.partials = options.partials;
              container.decorators = options.decorators;
            }
          };
          ret._child = function(i, data, blockParams, depths) {
            if (templateSpec.useBlockParams && !blockParams) {
              throw new _exception2['default']('must pass block params');
            }
            if (templateSpec.useDepths && !depths) {
              throw new _exception2['default']('must pass parent depths');
            }
            return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
          };
          return ret;
        }
        function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
          function prog(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var currentDepths = depths;
            if (depths && context !== depths[0]) {
              currentDepths = [context].concat(depths);
            }
            return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
          }
          prog = executeDecorators(fn, prog, container, depths, data, blockParams);
          prog.program = i;
          prog.depth = depths ? depths.length : 0;
          prog.blockParams = declaredBlockParams || 0;
          return prog;
        }
        function resolvePartial(partial, context, options) {
          if (!partial) {
            if (options.name === '@partial-block') {
              partial = options.data['partial-block'];
            } else {
              partial = options.partials[options.name];
            }
          } else if (!partial.call && !options.name) {
            options.name = partial;
            partial = options.partials[partial];
          }
          return partial;
        }
        function invokePartial(partial, context, options) {
          options.partial = true;
          if (options.ids) {
            options.data.contextPath = options.ids[0] || options.data.contextPath;
          }
          var partialBlock = undefined;
          if (options.fn && options.fn !== noop) {
            options.data = _base.createFrame(options.data);
            partialBlock = options.data['partial-block'] = options.fn;
            if (partialBlock.partials) {
              options.partials = Utils.extend({}, options.partials, partialBlock.partials);
            }
          }
          if (partial === undefined && partialBlock) {
            partial = partialBlock;
          }
          if (partial === undefined) {
            throw new _exception2['default']('The partial ' + options.name + ' could not be found');
          } else if (partial instanceof Function) {
            return partial(context, options);
          }
        }
        function noop() {
          return '';
        }
        function initData(context, data) {
          if (!data || !('root' in data)) {
            data = data ? _base.createFrame(data) : {};
            data.root = context;
          }
          return data;
        }
        function executeDecorators(fn, prog, container, depths, data, blockParams) {
          if (fn.decorator) {
            var props = {};
            prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
            Utils.extend(prog, props);
          }
          return prog;
        }
      }, function(module, exports) {
        (function(global) {
          'use strict';
          exports.__esModule = true;
          exports['default'] = function(Handlebars) {
            var root = typeof global !== 'undefined' ? global : window,
                $Handlebars = root.Handlebars;
            Handlebars.noConflict = function() {
              if (root.Handlebars === Handlebars) {
                root.Handlebars = $Handlebars;
              }
              return Handlebars;
            };
          };
          module.exports = exports['default'];
        }.call(exports, (function() {
          return this;
        }())));
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        var AST = {helpers: {
            helperExpression: function helperExpression(node) {
              return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
            },
            scopedId: function scopedId(path) {
              return (/^\.|this\b/.test(path.original));
            },
            simpleId: function simpleId(path) {
              return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
            }
          }};
        exports['default'] = AST;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        exports.__esModule = true;
        exports.parse = parse;
        var _parser = __webpack_require__(23);
        var _parser2 = _interopRequireDefault(_parser);
        var _whitespaceControl = __webpack_require__(24);
        var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
        var _helpers = __webpack_require__(26);
        var Helpers = _interopRequireWildcard(_helpers);
        var _utils = __webpack_require__(5);
        exports.parser = _parser2['default'];
        var yy = {};
        _utils.extend(yy, Helpers);
        function parse(input, options) {
          if (input.type === 'Program') {
            return input;
          }
          _parser2['default'].yy = yy;
          yy.locInfo = function(locInfo) {
            return new yy.SourceLocation(options && options.srcName, locInfo);
          };
          var strip = new _whitespaceControl2['default'](options);
          return strip.accept(_parser2['default'].parse(input));
        }
      }, function(module, exports) {
        "use strict";
        var handlebars = (function() {
          var parser = {
            trace: function trace() {},
            yy: {},
            symbols_: {
              "error": 2,
              "root": 3,
              "program": 4,
              "EOF": 5,
              "program_repetition0": 6,
              "statement": 7,
              "mustache": 8,
              "block": 9,
              "rawBlock": 10,
              "partial": 11,
              "partialBlock": 12,
              "content": 13,
              "COMMENT": 14,
              "CONTENT": 15,
              "openRawBlock": 16,
              "rawBlock_repetition_plus0": 17,
              "END_RAW_BLOCK": 18,
              "OPEN_RAW_BLOCK": 19,
              "helperName": 20,
              "openRawBlock_repetition0": 21,
              "openRawBlock_option0": 22,
              "CLOSE_RAW_BLOCK": 23,
              "openBlock": 24,
              "block_option0": 25,
              "closeBlock": 26,
              "openInverse": 27,
              "block_option1": 28,
              "OPEN_BLOCK": 29,
              "openBlock_repetition0": 30,
              "openBlock_option0": 31,
              "openBlock_option1": 32,
              "CLOSE": 33,
              "OPEN_INVERSE": 34,
              "openInverse_repetition0": 35,
              "openInverse_option0": 36,
              "openInverse_option1": 37,
              "openInverseChain": 38,
              "OPEN_INVERSE_CHAIN": 39,
              "openInverseChain_repetition0": 40,
              "openInverseChain_option0": 41,
              "openInverseChain_option1": 42,
              "inverseAndProgram": 43,
              "INVERSE": 44,
              "inverseChain": 45,
              "inverseChain_option0": 46,
              "OPEN_ENDBLOCK": 47,
              "OPEN": 48,
              "mustache_repetition0": 49,
              "mustache_option0": 50,
              "OPEN_UNESCAPED": 51,
              "mustache_repetition1": 52,
              "mustache_option1": 53,
              "CLOSE_UNESCAPED": 54,
              "OPEN_PARTIAL": 55,
              "partialName": 56,
              "partial_repetition0": 57,
              "partial_option0": 58,
              "openPartialBlock": 59,
              "OPEN_PARTIAL_BLOCK": 60,
              "openPartialBlock_repetition0": 61,
              "openPartialBlock_option0": 62,
              "param": 63,
              "sexpr": 64,
              "OPEN_SEXPR": 65,
              "sexpr_repetition0": 66,
              "sexpr_option0": 67,
              "CLOSE_SEXPR": 68,
              "hash": 69,
              "hash_repetition_plus0": 70,
              "hashSegment": 71,
              "ID": 72,
              "EQUALS": 73,
              "blockParams": 74,
              "OPEN_BLOCK_PARAMS": 75,
              "blockParams_repetition_plus0": 76,
              "CLOSE_BLOCK_PARAMS": 77,
              "path": 78,
              "dataName": 79,
              "STRING": 80,
              "NUMBER": 81,
              "BOOLEAN": 82,
              "UNDEFINED": 83,
              "NULL": 84,
              "DATA": 85,
              "pathSegments": 86,
              "SEP": 87,
              "$accept": 0,
              "$end": 1
            },
            terminals_: {
              2: "error",
              5: "EOF",
              14: "COMMENT",
              15: "CONTENT",
              18: "END_RAW_BLOCK",
              19: "OPEN_RAW_BLOCK",
              23: "CLOSE_RAW_BLOCK",
              29: "OPEN_BLOCK",
              33: "CLOSE",
              34: "OPEN_INVERSE",
              39: "OPEN_INVERSE_CHAIN",
              44: "INVERSE",
              47: "OPEN_ENDBLOCK",
              48: "OPEN",
              51: "OPEN_UNESCAPED",
              54: "CLOSE_UNESCAPED",
              55: "OPEN_PARTIAL",
              60: "OPEN_PARTIAL_BLOCK",
              65: "OPEN_SEXPR",
              68: "CLOSE_SEXPR",
              72: "ID",
              73: "EQUALS",
              75: "OPEN_BLOCK_PARAMS",
              77: "CLOSE_BLOCK_PARAMS",
              80: "STRING",
              81: "NUMBER",
              82: "BOOLEAN",
              83: "UNDEFINED",
              84: "NULL",
              85: "DATA",
              87: "SEP"
            },
            productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
            performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
              var $0 = $$.length - 1;
              switch (yystate) {
                case 1:
                  return $$[$0 - 1];
                  break;
                case 2:
                  this.$ = yy.prepareProgram($$[$0]);
                  break;
                case 3:
                  this.$ = $$[$0];
                  break;
                case 4:
                  this.$ = $$[$0];
                  break;
                case 5:
                  this.$ = $$[$0];
                  break;
                case 6:
                  this.$ = $$[$0];
                  break;
                case 7:
                  this.$ = $$[$0];
                  break;
                case 8:
                  this.$ = $$[$0];
                  break;
                case 9:
                  this.$ = {
                    type: 'CommentStatement',
                    value: yy.stripComment($$[$0]),
                    strip: yy.stripFlags($$[$0], $$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 10:
                  this.$ = {
                    type: 'ContentStatement',
                    original: $$[$0],
                    value: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 11:
                  this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                  break;
                case 12:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1]
                  };
                  break;
                case 13:
                  this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                  break;
                case 14:
                  this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                  break;
                case 15:
                  this.$ = {
                    open: $$[$0 - 5],
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 16:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 17:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 18:
                  this.$ = {
                    strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                    program: $$[$0]
                  };
                  break;
                case 19:
                  var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                      program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                  program.chained = true;
                  this.$ = {
                    strip: $$[$0 - 2].strip,
                    program: program,
                    chain: true
                  };
                  break;
                case 20:
                  this.$ = $$[$0];
                  break;
                case 21:
                  this.$ = {
                    path: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 2], $$[$0])
                  };
                  break;
                case 22:
                  this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                  break;
                case 23:
                  this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                  break;
                case 24:
                  this.$ = {
                    type: 'PartialStatement',
                    name: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    indent: '',
                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 25:
                  this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                  break;
                case 26:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 4], $$[$0])
                  };
                  break;
                case 27:
                  this.$ = $$[$0];
                  break;
                case 28:
                  this.$ = $$[$0];
                  break;
                case 29:
                  this.$ = {
                    type: 'SubExpression',
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 30:
                  this.$ = {
                    type: 'Hash',
                    pairs: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 31:
                  this.$ = {
                    type: 'HashPair',
                    key: yy.id($$[$0 - 2]),
                    value: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 32:
                  this.$ = yy.id($$[$0 - 1]);
                  break;
                case 33:
                  this.$ = $$[$0];
                  break;
                case 34:
                  this.$ = $$[$0];
                  break;
                case 35:
                  this.$ = {
                    type: 'StringLiteral',
                    value: $$[$0],
                    original: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 36:
                  this.$ = {
                    type: 'NumberLiteral',
                    value: Number($$[$0]),
                    original: Number($$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 37:
                  this.$ = {
                    type: 'BooleanLiteral',
                    value: $$[$0] === 'true',
                    original: $$[$0] === 'true',
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 38:
                  this.$ = {
                    type: 'UndefinedLiteral',
                    original: undefined,
                    value: undefined,
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 39:
                  this.$ = {
                    type: 'NullLiteral',
                    original: null,
                    value: null,
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 40:
                  this.$ = $$[$0];
                  break;
                case 41:
                  this.$ = $$[$0];
                  break;
                case 42:
                  this.$ = yy.preparePath(true, $$[$0], this._$);
                  break;
                case 43:
                  this.$ = yy.preparePath(false, $$[$0], this._$);
                  break;
                case 44:
                  $$[$0 - 2].push({
                    part: yy.id($$[$0]),
                    original: $$[$0],
                    separator: $$[$0 - 1]
                  });
                  this.$ = $$[$0 - 2];
                  break;
                case 45:
                  this.$ = [{
                    part: yy.id($$[$0]),
                    original: $$[$0]
                  }];
                  break;
                case 46:
                  this.$ = [];
                  break;
                case 47:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 48:
                  this.$ = [$$[$0]];
                  break;
                case 49:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 50:
                  this.$ = [];
                  break;
                case 51:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 58:
                  this.$ = [];
                  break;
                case 59:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 64:
                  this.$ = [];
                  break;
                case 65:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 70:
                  this.$ = [];
                  break;
                case 71:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 78:
                  this.$ = [];
                  break;
                case 79:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 82:
                  this.$ = [];
                  break;
                case 83:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 86:
                  this.$ = [];
                  break;
                case 87:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 90:
                  this.$ = [];
                  break;
                case 91:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 94:
                  this.$ = [];
                  break;
                case 95:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 98:
                  this.$ = [$$[$0]];
                  break;
                case 99:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 100:
                  this.$ = [$$[$0]];
                  break;
                case 101:
                  $$[$0 - 1].push($$[$0]);
                  break;
              }
            },
            table: [{
              3: 1,
              4: 2,
              5: [2, 46],
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {1: [3]}, {5: [1, 4]}, {
              5: [2, 2],
              7: 5,
              8: 6,
              9: 7,
              10: 8,
              11: 9,
              12: 10,
              13: 11,
              14: [1, 12],
              15: [1, 20],
              16: 17,
              19: [1, 23],
              24: 15,
              27: 16,
              29: [1, 21],
              34: [1, 22],
              39: [2, 2],
              44: [2, 2],
              47: [2, 2],
              48: [1, 13],
              51: [1, 14],
              55: [1, 18],
              59: 19,
              60: [1, 24]
            }, {1: [2, 1]}, {
              5: [2, 47],
              14: [2, 47],
              15: [2, 47],
              19: [2, 47],
              29: [2, 47],
              34: [2, 47],
              39: [2, 47],
              44: [2, 47],
              47: [2, 47],
              48: [2, 47],
              51: [2, 47],
              55: [2, 47],
              60: [2, 47]
            }, {
              5: [2, 3],
              14: [2, 3],
              15: [2, 3],
              19: [2, 3],
              29: [2, 3],
              34: [2, 3],
              39: [2, 3],
              44: [2, 3],
              47: [2, 3],
              48: [2, 3],
              51: [2, 3],
              55: [2, 3],
              60: [2, 3]
            }, {
              5: [2, 4],
              14: [2, 4],
              15: [2, 4],
              19: [2, 4],
              29: [2, 4],
              34: [2, 4],
              39: [2, 4],
              44: [2, 4],
              47: [2, 4],
              48: [2, 4],
              51: [2, 4],
              55: [2, 4],
              60: [2, 4]
            }, {
              5: [2, 5],
              14: [2, 5],
              15: [2, 5],
              19: [2, 5],
              29: [2, 5],
              34: [2, 5],
              39: [2, 5],
              44: [2, 5],
              47: [2, 5],
              48: [2, 5],
              51: [2, 5],
              55: [2, 5],
              60: [2, 5]
            }, {
              5: [2, 6],
              14: [2, 6],
              15: [2, 6],
              19: [2, 6],
              29: [2, 6],
              34: [2, 6],
              39: [2, 6],
              44: [2, 6],
              47: [2, 6],
              48: [2, 6],
              51: [2, 6],
              55: [2, 6],
              60: [2, 6]
            }, {
              5: [2, 7],
              14: [2, 7],
              15: [2, 7],
              19: [2, 7],
              29: [2, 7],
              34: [2, 7],
              39: [2, 7],
              44: [2, 7],
              47: [2, 7],
              48: [2, 7],
              51: [2, 7],
              55: [2, 7],
              60: [2, 7]
            }, {
              5: [2, 8],
              14: [2, 8],
              15: [2, 8],
              19: [2, 8],
              29: [2, 8],
              34: [2, 8],
              39: [2, 8],
              44: [2, 8],
              47: [2, 8],
              48: [2, 8],
              51: [2, 8],
              55: [2, 8],
              60: [2, 8]
            }, {
              5: [2, 9],
              14: [2, 9],
              15: [2, 9],
              19: [2, 9],
              29: [2, 9],
              34: [2, 9],
              39: [2, 9],
              44: [2, 9],
              47: [2, 9],
              48: [2, 9],
              51: [2, 9],
              55: [2, 9],
              60: [2, 9]
            }, {
              20: 25,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 36,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 37,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              39: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              4: 38,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              13: 40,
              15: [1, 20],
              17: 39
            }, {
              20: 42,
              56: 41,
              64: 43,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 45,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              5: [2, 10],
              14: [2, 10],
              15: [2, 10],
              18: [2, 10],
              19: [2, 10],
              29: [2, 10],
              34: [2, 10],
              39: [2, 10],
              44: [2, 10],
              47: [2, 10],
              48: [2, 10],
              51: [2, 10],
              55: [2, 10],
              60: [2, 10]
            }, {
              20: 46,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 47,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 48,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 42,
              56: 49,
              64: 43,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              33: [2, 78],
              49: 50,
              65: [2, 78],
              72: [2, 78],
              80: [2, 78],
              81: [2, 78],
              82: [2, 78],
              83: [2, 78],
              84: [2, 78],
              85: [2, 78]
            }, {
              23: [2, 33],
              33: [2, 33],
              54: [2, 33],
              65: [2, 33],
              68: [2, 33],
              72: [2, 33],
              75: [2, 33],
              80: [2, 33],
              81: [2, 33],
              82: [2, 33],
              83: [2, 33],
              84: [2, 33],
              85: [2, 33]
            }, {
              23: [2, 34],
              33: [2, 34],
              54: [2, 34],
              65: [2, 34],
              68: [2, 34],
              72: [2, 34],
              75: [2, 34],
              80: [2, 34],
              81: [2, 34],
              82: [2, 34],
              83: [2, 34],
              84: [2, 34],
              85: [2, 34]
            }, {
              23: [2, 35],
              33: [2, 35],
              54: [2, 35],
              65: [2, 35],
              68: [2, 35],
              72: [2, 35],
              75: [2, 35],
              80: [2, 35],
              81: [2, 35],
              82: [2, 35],
              83: [2, 35],
              84: [2, 35],
              85: [2, 35]
            }, {
              23: [2, 36],
              33: [2, 36],
              54: [2, 36],
              65: [2, 36],
              68: [2, 36],
              72: [2, 36],
              75: [2, 36],
              80: [2, 36],
              81: [2, 36],
              82: [2, 36],
              83: [2, 36],
              84: [2, 36],
              85: [2, 36]
            }, {
              23: [2, 37],
              33: [2, 37],
              54: [2, 37],
              65: [2, 37],
              68: [2, 37],
              72: [2, 37],
              75: [2, 37],
              80: [2, 37],
              81: [2, 37],
              82: [2, 37],
              83: [2, 37],
              84: [2, 37],
              85: [2, 37]
            }, {
              23: [2, 38],
              33: [2, 38],
              54: [2, 38],
              65: [2, 38],
              68: [2, 38],
              72: [2, 38],
              75: [2, 38],
              80: [2, 38],
              81: [2, 38],
              82: [2, 38],
              83: [2, 38],
              84: [2, 38],
              85: [2, 38]
            }, {
              23: [2, 39],
              33: [2, 39],
              54: [2, 39],
              65: [2, 39],
              68: [2, 39],
              72: [2, 39],
              75: [2, 39],
              80: [2, 39],
              81: [2, 39],
              82: [2, 39],
              83: [2, 39],
              84: [2, 39],
              85: [2, 39]
            }, {
              23: [2, 43],
              33: [2, 43],
              54: [2, 43],
              65: [2, 43],
              68: [2, 43],
              72: [2, 43],
              75: [2, 43],
              80: [2, 43],
              81: [2, 43],
              82: [2, 43],
              83: [2, 43],
              84: [2, 43],
              85: [2, 43],
              87: [1, 51]
            }, {
              72: [1, 35],
              86: 52
            }, {
              23: [2, 45],
              33: [2, 45],
              54: [2, 45],
              65: [2, 45],
              68: [2, 45],
              72: [2, 45],
              75: [2, 45],
              80: [2, 45],
              81: [2, 45],
              82: [2, 45],
              83: [2, 45],
              84: [2, 45],
              85: [2, 45],
              87: [2, 45]
            }, {
              52: 53,
              54: [2, 82],
              65: [2, 82],
              72: [2, 82],
              80: [2, 82],
              81: [2, 82],
              82: [2, 82],
              83: [2, 82],
              84: [2, 82],
              85: [2, 82]
            }, {
              25: 54,
              38: 56,
              39: [1, 58],
              43: 57,
              44: [1, 59],
              45: 55,
              47: [2, 54]
            }, {
              28: 60,
              43: 61,
              44: [1, 59],
              47: [2, 56]
            }, {
              13: 63,
              15: [1, 20],
              18: [1, 62]
            }, {
              15: [2, 48],
              18: [2, 48]
            }, {
              33: [2, 86],
              57: 64,
              65: [2, 86],
              72: [2, 86],
              80: [2, 86],
              81: [2, 86],
              82: [2, 86],
              83: [2, 86],
              84: [2, 86],
              85: [2, 86]
            }, {
              33: [2, 40],
              65: [2, 40],
              72: [2, 40],
              80: [2, 40],
              81: [2, 40],
              82: [2, 40],
              83: [2, 40],
              84: [2, 40],
              85: [2, 40]
            }, {
              33: [2, 41],
              65: [2, 41],
              72: [2, 41],
              80: [2, 41],
              81: [2, 41],
              82: [2, 41],
              83: [2, 41],
              84: [2, 41],
              85: [2, 41]
            }, {
              20: 65,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              26: 66,
              47: [1, 67]
            }, {
              30: 68,
              33: [2, 58],
              65: [2, 58],
              72: [2, 58],
              75: [2, 58],
              80: [2, 58],
              81: [2, 58],
              82: [2, 58],
              83: [2, 58],
              84: [2, 58],
              85: [2, 58]
            }, {
              33: [2, 64],
              35: 69,
              65: [2, 64],
              72: [2, 64],
              75: [2, 64],
              80: [2, 64],
              81: [2, 64],
              82: [2, 64],
              83: [2, 64],
              84: [2, 64],
              85: [2, 64]
            }, {
              21: 70,
              23: [2, 50],
              65: [2, 50],
              72: [2, 50],
              80: [2, 50],
              81: [2, 50],
              82: [2, 50],
              83: [2, 50],
              84: [2, 50],
              85: [2, 50]
            }, {
              33: [2, 90],
              61: 71,
              65: [2, 90],
              72: [2, 90],
              80: [2, 90],
              81: [2, 90],
              82: [2, 90],
              83: [2, 90],
              84: [2, 90],
              85: [2, 90]
            }, {
              20: 75,
              33: [2, 80],
              50: 72,
              63: 73,
              64: 76,
              65: [1, 44],
              69: 74,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {72: [1, 80]}, {
              23: [2, 42],
              33: [2, 42],
              54: [2, 42],
              65: [2, 42],
              68: [2, 42],
              72: [2, 42],
              75: [2, 42],
              80: [2, 42],
              81: [2, 42],
              82: [2, 42],
              83: [2, 42],
              84: [2, 42],
              85: [2, 42],
              87: [1, 51]
            }, {
              20: 75,
              53: 81,
              54: [2, 84],
              63: 82,
              64: 76,
              65: [1, 44],
              69: 83,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              26: 84,
              47: [1, 67]
            }, {47: [2, 55]}, {
              4: 85,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              39: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {47: [2, 20]}, {
              20: 86,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 87,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              26: 88,
              47: [1, 67]
            }, {47: [2, 57]}, {
              5: [2, 11],
              14: [2, 11],
              15: [2, 11],
              19: [2, 11],
              29: [2, 11],
              34: [2, 11],
              39: [2, 11],
              44: [2, 11],
              47: [2, 11],
              48: [2, 11],
              51: [2, 11],
              55: [2, 11],
              60: [2, 11]
            }, {
              15: [2, 49],
              18: [2, 49]
            }, {
              20: 75,
              33: [2, 88],
              58: 89,
              63: 90,
              64: 76,
              65: [1, 44],
              69: 91,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              65: [2, 94],
              66: 92,
              68: [2, 94],
              72: [2, 94],
              80: [2, 94],
              81: [2, 94],
              82: [2, 94],
              83: [2, 94],
              84: [2, 94],
              85: [2, 94]
            }, {
              5: [2, 25],
              14: [2, 25],
              15: [2, 25],
              19: [2, 25],
              29: [2, 25],
              34: [2, 25],
              39: [2, 25],
              44: [2, 25],
              47: [2, 25],
              48: [2, 25],
              51: [2, 25],
              55: [2, 25],
              60: [2, 25]
            }, {
              20: 93,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              31: 94,
              33: [2, 60],
              63: 95,
              64: 76,
              65: [1, 44],
              69: 96,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 60],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              33: [2, 66],
              36: 97,
              63: 98,
              64: 76,
              65: [1, 44],
              69: 99,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 66],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              22: 100,
              23: [2, 52],
              63: 101,
              64: 76,
              65: [1, 44],
              69: 102,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              33: [2, 92],
              62: 103,
              63: 104,
              64: 76,
              65: [1, 44],
              69: 105,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {33: [1, 106]}, {
              33: [2, 79],
              65: [2, 79],
              72: [2, 79],
              80: [2, 79],
              81: [2, 79],
              82: [2, 79],
              83: [2, 79],
              84: [2, 79],
              85: [2, 79]
            }, {33: [2, 81]}, {
              23: [2, 27],
              33: [2, 27],
              54: [2, 27],
              65: [2, 27],
              68: [2, 27],
              72: [2, 27],
              75: [2, 27],
              80: [2, 27],
              81: [2, 27],
              82: [2, 27],
              83: [2, 27],
              84: [2, 27],
              85: [2, 27]
            }, {
              23: [2, 28],
              33: [2, 28],
              54: [2, 28],
              65: [2, 28],
              68: [2, 28],
              72: [2, 28],
              75: [2, 28],
              80: [2, 28],
              81: [2, 28],
              82: [2, 28],
              83: [2, 28],
              84: [2, 28],
              85: [2, 28]
            }, {
              23: [2, 30],
              33: [2, 30],
              54: [2, 30],
              68: [2, 30],
              71: 107,
              72: [1, 108],
              75: [2, 30]
            }, {
              23: [2, 98],
              33: [2, 98],
              54: [2, 98],
              68: [2, 98],
              72: [2, 98],
              75: [2, 98]
            }, {
              23: [2, 45],
              33: [2, 45],
              54: [2, 45],
              65: [2, 45],
              68: [2, 45],
              72: [2, 45],
              73: [1, 109],
              75: [2, 45],
              80: [2, 45],
              81: [2, 45],
              82: [2, 45],
              83: [2, 45],
              84: [2, 45],
              85: [2, 45],
              87: [2, 45]
            }, {
              23: [2, 44],
              33: [2, 44],
              54: [2, 44],
              65: [2, 44],
              68: [2, 44],
              72: [2, 44],
              75: [2, 44],
              80: [2, 44],
              81: [2, 44],
              82: [2, 44],
              83: [2, 44],
              84: [2, 44],
              85: [2, 44],
              87: [2, 44]
            }, {54: [1, 110]}, {
              54: [2, 83],
              65: [2, 83],
              72: [2, 83],
              80: [2, 83],
              81: [2, 83],
              82: [2, 83],
              83: [2, 83],
              84: [2, 83],
              85: [2, 83]
            }, {54: [2, 85]}, {
              5: [2, 13],
              14: [2, 13],
              15: [2, 13],
              19: [2, 13],
              29: [2, 13],
              34: [2, 13],
              39: [2, 13],
              44: [2, 13],
              47: [2, 13],
              48: [2, 13],
              51: [2, 13],
              55: [2, 13],
              60: [2, 13]
            }, {
              38: 56,
              39: [1, 58],
              43: 57,
              44: [1, 59],
              45: 112,
              46: 111,
              47: [2, 76]
            }, {
              33: [2, 70],
              40: 113,
              65: [2, 70],
              72: [2, 70],
              75: [2, 70],
              80: [2, 70],
              81: [2, 70],
              82: [2, 70],
              83: [2, 70],
              84: [2, 70],
              85: [2, 70]
            }, {47: [2, 18]}, {
              5: [2, 14],
              14: [2, 14],
              15: [2, 14],
              19: [2, 14],
              29: [2, 14],
              34: [2, 14],
              39: [2, 14],
              44: [2, 14],
              47: [2, 14],
              48: [2, 14],
              51: [2, 14],
              55: [2, 14],
              60: [2, 14]
            }, {33: [1, 114]}, {
              33: [2, 87],
              65: [2, 87],
              72: [2, 87],
              80: [2, 87],
              81: [2, 87],
              82: [2, 87],
              83: [2, 87],
              84: [2, 87],
              85: [2, 87]
            }, {33: [2, 89]}, {
              20: 75,
              63: 116,
              64: 76,
              65: [1, 44],
              67: 115,
              68: [2, 96],
              69: 117,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {33: [1, 118]}, {
              32: 119,
              33: [2, 62],
              74: 120,
              75: [1, 121]
            }, {
              33: [2, 59],
              65: [2, 59],
              72: [2, 59],
              75: [2, 59],
              80: [2, 59],
              81: [2, 59],
              82: [2, 59],
              83: [2, 59],
              84: [2, 59],
              85: [2, 59]
            }, {
              33: [2, 61],
              75: [2, 61]
            }, {
              33: [2, 68],
              37: 122,
              74: 123,
              75: [1, 121]
            }, {
              33: [2, 65],
              65: [2, 65],
              72: [2, 65],
              75: [2, 65],
              80: [2, 65],
              81: [2, 65],
              82: [2, 65],
              83: [2, 65],
              84: [2, 65],
              85: [2, 65]
            }, {
              33: [2, 67],
              75: [2, 67]
            }, {23: [1, 124]}, {
              23: [2, 51],
              65: [2, 51],
              72: [2, 51],
              80: [2, 51],
              81: [2, 51],
              82: [2, 51],
              83: [2, 51],
              84: [2, 51],
              85: [2, 51]
            }, {23: [2, 53]}, {33: [1, 125]}, {
              33: [2, 91],
              65: [2, 91],
              72: [2, 91],
              80: [2, 91],
              81: [2, 91],
              82: [2, 91],
              83: [2, 91],
              84: [2, 91],
              85: [2, 91]
            }, {33: [2, 93]}, {
              5: [2, 22],
              14: [2, 22],
              15: [2, 22],
              19: [2, 22],
              29: [2, 22],
              34: [2, 22],
              39: [2, 22],
              44: [2, 22],
              47: [2, 22],
              48: [2, 22],
              51: [2, 22],
              55: [2, 22],
              60: [2, 22]
            }, {
              23: [2, 99],
              33: [2, 99],
              54: [2, 99],
              68: [2, 99],
              72: [2, 99],
              75: [2, 99]
            }, {73: [1, 109]}, {
              20: 75,
              63: 126,
              64: 76,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              5: [2, 23],
              14: [2, 23],
              15: [2, 23],
              19: [2, 23],
              29: [2, 23],
              34: [2, 23],
              39: [2, 23],
              44: [2, 23],
              47: [2, 23],
              48: [2, 23],
              51: [2, 23],
              55: [2, 23],
              60: [2, 23]
            }, {47: [2, 19]}, {47: [2, 77]}, {
              20: 75,
              33: [2, 72],
              41: 127,
              63: 128,
              64: 76,
              65: [1, 44],
              69: 129,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 72],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              5: [2, 24],
              14: [2, 24],
              15: [2, 24],
              19: [2, 24],
              29: [2, 24],
              34: [2, 24],
              39: [2, 24],
              44: [2, 24],
              47: [2, 24],
              48: [2, 24],
              51: [2, 24],
              55: [2, 24],
              60: [2, 24]
            }, {68: [1, 130]}, {
              65: [2, 95],
              68: [2, 95],
              72: [2, 95],
              80: [2, 95],
              81: [2, 95],
              82: [2, 95],
              83: [2, 95],
              84: [2, 95],
              85: [2, 95]
            }, {68: [2, 97]}, {
              5: [2, 21],
              14: [2, 21],
              15: [2, 21],
              19: [2, 21],
              29: [2, 21],
              34: [2, 21],
              39: [2, 21],
              44: [2, 21],
              47: [2, 21],
              48: [2, 21],
              51: [2, 21],
              55: [2, 21],
              60: [2, 21]
            }, {33: [1, 131]}, {33: [2, 63]}, {
              72: [1, 133],
              76: 132
            }, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {
              14: [2, 26],
              15: [2, 26],
              19: [2, 26],
              29: [2, 26],
              34: [2, 26],
              47: [2, 26],
              48: [2, 26],
              51: [2, 26],
              55: [2, 26],
              60: [2, 26]
            }, {
              23: [2, 31],
              33: [2, 31],
              54: [2, 31],
              68: [2, 31],
              72: [2, 31],
              75: [2, 31]
            }, {
              33: [2, 74],
              42: 135,
              74: 136,
              75: [1, 121]
            }, {
              33: [2, 71],
              65: [2, 71],
              72: [2, 71],
              75: [2, 71],
              80: [2, 71],
              81: [2, 71],
              82: [2, 71],
              83: [2, 71],
              84: [2, 71],
              85: [2, 71]
            }, {
              33: [2, 73],
              75: [2, 73]
            }, {
              23: [2, 29],
              33: [2, 29],
              54: [2, 29],
              65: [2, 29],
              68: [2, 29],
              72: [2, 29],
              75: [2, 29],
              80: [2, 29],
              81: [2, 29],
              82: [2, 29],
              83: [2, 29],
              84: [2, 29],
              85: [2, 29]
            }, {
              14: [2, 15],
              15: [2, 15],
              19: [2, 15],
              29: [2, 15],
              34: [2, 15],
              39: [2, 15],
              44: [2, 15],
              47: [2, 15],
              48: [2, 15],
              51: [2, 15],
              55: [2, 15],
              60: [2, 15]
            }, {
              72: [1, 138],
              77: [1, 137]
            }, {
              72: [2, 100],
              77: [2, 100]
            }, {
              14: [2, 16],
              15: [2, 16],
              19: [2, 16],
              29: [2, 16],
              34: [2, 16],
              44: [2, 16],
              47: [2, 16],
              48: [2, 16],
              51: [2, 16],
              55: [2, 16],
              60: [2, 16]
            }, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {
              72: [2, 101],
              77: [2, 101]
            }, {
              14: [2, 17],
              15: [2, 17],
              19: [2, 17],
              29: [2, 17],
              34: [2, 17],
              39: [2, 17],
              44: [2, 17],
              47: [2, 17],
              48: [2, 17],
              51: [2, 17],
              55: [2, 17],
              60: [2, 17]
            }],
            defaultActions: {
              4: [2, 1],
              55: [2, 55],
              57: [2, 20],
              61: [2, 57],
              74: [2, 81],
              83: [2, 85],
              87: [2, 18],
              91: [2, 89],
              102: [2, 53],
              105: [2, 93],
              111: [2, 19],
              112: [2, 77],
              117: [2, 97],
              120: [2, 63],
              123: [2, 69],
              124: [2, 12],
              136: [2, 75],
              137: [2, 32]
            },
            parseError: function parseError(str, hash) {
              throw new Error(str);
            },
            parse: function parse(input) {
              var self = this,
                  stack = [0],
                  vstack = [null],
                  lstack = [],
                  table = this.table,
                  yytext = "",
                  yylineno = 0,
                  yyleng = 0,
                  recovering = 0,
                  TERROR = 2,
                  EOF = 1;
              this.lexer.setInput(input);
              this.lexer.yy = this.yy;
              this.yy.lexer = this.lexer;
              this.yy.parser = this;
              if (typeof this.lexer.yylloc == "undefined")
                this.lexer.yylloc = {};
              var yyloc = this.lexer.yylloc;
              lstack.push(yyloc);
              var ranges = this.lexer.options && this.lexer.options.ranges;
              if (typeof this.yy.parseError === "function")
                this.parseError = this.yy.parseError;
              function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
              }
              function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") {
                  token = self.symbols_[token] || token;
                }
                return token;
              }
              var symbol,
                  preErrorSymbol,
                  state,
                  action,
                  a,
                  r,
                  yyval = {},
                  p,
                  len,
                  newState,
                  expected;
              while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                  action = this.defaultActions[state];
                } else {
                  if (symbol === null || typeof symbol == "undefined") {
                    symbol = lex();
                  }
                  action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                  var errStr = "";
                  if (!recovering) {
                    expected = [];
                    for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                      }
                    if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                    } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                    }
                    this.parseError(errStr, {
                      text: this.lexer.match,
                      token: this.terminals_[symbol] || symbol,
                      line: this.lexer.yylineno,
                      loc: yyloc,
                      expected: expected
                    });
                  }
                }
                if (action[0] instanceof Array && action.length > 1) {
                  throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                }
                switch (action[0]) {
                  case 1:
                    stack.push(symbol);
                    vstack.push(this.lexer.yytext);
                    lstack.push(this.lexer.yylloc);
                    stack.push(action[1]);
                    symbol = null;
                    if (!preErrorSymbol) {
                      yyleng = this.lexer.yyleng;
                      yytext = this.lexer.yytext;
                      yylineno = this.lexer.yylineno;
                      yyloc = this.lexer.yylloc;
                      if (recovering > 0)
                        recovering--;
                    } else {
                      symbol = preErrorSymbol;
                      preErrorSymbol = null;
                    }
                    break;
                  case 2:
                    len = this.productions_[action[1]][1];
                    yyval.$ = vstack[vstack.length - len];
                    yyval._$ = {
                      first_line: lstack[lstack.length - (len || 1)].first_line,
                      last_line: lstack[lstack.length - 1].last_line,
                      first_column: lstack[lstack.length - (len || 1)].first_column,
                      last_column: lstack[lstack.length - 1].last_column
                    };
                    if (ranges) {
                      yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                    }
                    r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                    if (typeof r !== "undefined") {
                      return r;
                    }
                    if (len) {
                      stack = stack.slice(0, -1 * len * 2);
                      vstack = vstack.slice(0, -1 * len);
                      lstack = lstack.slice(0, -1 * len);
                    }
                    stack.push(this.productions_[action[1]][0]);
                    vstack.push(yyval.$);
                    lstack.push(yyval._$);
                    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                    stack.push(newState);
                    break;
                  case 3:
                    return true;
                }
              }
              return true;
            }
          };
          var lexer = (function() {
            var lexer = {
              EOF: 1,
              parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                  this.yy.parser.parseError(str, hash);
                } else {
                  throw new Error(str);
                }
              },
              setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0
                };
                if (this.options.ranges)
                  this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
              },
              input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                  this.yylineno++;
                  this.yylloc.last_line++;
                } else {
                  this.yylloc.last_column++;
                }
                if (this.options.ranges)
                  this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
              },
              unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1)
                  this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                  this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                return this;
              },
              more: function more() {
                this._more = true;
                return this;
              },
              less: function less(n) {
                this.unput(this.match.slice(n));
              },
              pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
              },
              upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) {
                  next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
              },
              showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
              },
              next: function next() {
                if (this.done) {
                  return this.EOF;
                }
                if (!this._input)
                  this.done = true;
                var token,
                    match,
                    tempMatch,
                    index,
                    col,
                    lines;
                if (!this._more) {
                  this.yytext = '';
                  this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                  tempMatch = this._input.match(this.rules[rules[i]]);
                  if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                    match = tempMatch;
                    index = i;
                    if (!this.options.flex)
                      break;
                  }
                }
                if (match) {
                  lines = match[0].match(/(?:\r\n?|\n).*/g);
                  if (lines)
                    this.yylineno += lines.length;
                  this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                  };
                  this.yytext += match[0];
                  this.match += match[0];
                  this.matches = match;
                  this.yyleng = this.yytext.length;
                  if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                  }
                  this._more = false;
                  this._input = this._input.slice(match[0].length);
                  this.matched += match[0];
                  token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                  if (this.done && this._input)
                    this.done = false;
                  if (token)
                    return token;
                  else
                    return;
                }
                if (this._input === "") {
                  return this.EOF;
                } else {
                  return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                  });
                }
              },
              lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') {
                  return r;
                } else {
                  return this.lex();
                }
              },
              begin: function begin(condition) {
                this.conditionStack.push(condition);
              },
              popState: function popState() {
                return this.conditionStack.pop();
              },
              _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              },
              topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function begin(condition) {
                this.begin(condition);
              }
            };
            lexer.options = {};
            lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
              function strip(start, end) {
                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
              }
              var YYSTATE = YY_START;
              switch ($avoiding_name_collisions) {
                case 0:
                  if (yy_.yytext.slice(-2) === "\\\\") {
                    strip(0, 1);
                    this.begin("mu");
                  } else if (yy_.yytext.slice(-1) === "\\") {
                    strip(0, 1);
                    this.begin("emu");
                  } else {
                    this.begin("mu");
                  }
                  if (yy_.yytext)
                    return 15;
                  break;
                case 1:
                  return 15;
                  break;
                case 2:
                  this.popState();
                  return 15;
                  break;
                case 3:
                  this.begin('raw');
                  return 15;
                  break;
                case 4:
                  this.popState();
                  if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                    return 15;
                  } else {
                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                    return 'END_RAW_BLOCK';
                  }
                  break;
                case 5:
                  return 15;
                  break;
                case 6:
                  this.popState();
                  return 14;
                  break;
                case 7:
                  return 65;
                  break;
                case 8:
                  return 68;
                  break;
                case 9:
                  return 19;
                  break;
                case 10:
                  this.popState();
                  this.begin('raw');
                  return 23;
                  break;
                case 11:
                  return 55;
                  break;
                case 12:
                  return 60;
                  break;
                case 13:
                  return 29;
                  break;
                case 14:
                  return 47;
                  break;
                case 15:
                  this.popState();
                  return 44;
                  break;
                case 16:
                  this.popState();
                  return 44;
                  break;
                case 17:
                  return 34;
                  break;
                case 18:
                  return 39;
                  break;
                case 19:
                  return 51;
                  break;
                case 20:
                  return 48;
                  break;
                case 21:
                  this.unput(yy_.yytext);
                  this.popState();
                  this.begin('com');
                  break;
                case 22:
                  this.popState();
                  return 14;
                  break;
                case 23:
                  return 48;
                  break;
                case 24:
                  return 73;
                  break;
                case 25:
                  return 72;
                  break;
                case 26:
                  return 72;
                  break;
                case 27:
                  return 87;
                  break;
                case 28:
                  break;
                case 29:
                  this.popState();
                  return 54;
                  break;
                case 30:
                  this.popState();
                  return 33;
                  break;
                case 31:
                  yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                  return 80;
                  break;
                case 32:
                  yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                  return 80;
                  break;
                case 33:
                  return 85;
                  break;
                case 34:
                  return 82;
                  break;
                case 35:
                  return 82;
                  break;
                case 36:
                  return 83;
                  break;
                case 37:
                  return 84;
                  break;
                case 38:
                  return 81;
                  break;
                case 39:
                  return 75;
                  break;
                case 40:
                  return 77;
                  break;
                case 41:
                  return 72;
                  break;
                case 42:
                  yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                  return 72;
                  break;
                case 43:
                  return 'INVALID';
                  break;
                case 44:
                  return 5;
                  break;
              }
            };
            lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
            lexer.conditions = {
              "mu": {
                "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                "inclusive": false
              },
              "emu": {
                "rules": [2],
                "inclusive": false
              },
              "com": {
                "rules": [6],
                "inclusive": false
              },
              "raw": {
                "rules": [3, 4, 5],
                "inclusive": false
              },
              "INITIAL": {
                "rules": [0, 1, 44],
                "inclusive": true
              }
            };
            return lexer;
          })();
          parser.lexer = lexer;
          function Parser() {
            this.yy = {};
          }
          Parser.prototype = parser;
          parser.Parser = Parser;
          return new Parser();
        })();
        exports.__esModule = true;
        exports['default'] = handlebars;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _visitor = __webpack_require__(25);
        var _visitor2 = _interopRequireDefault(_visitor);
        function WhitespaceControl() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          this.options = options;
        }
        WhitespaceControl.prototype = new _visitor2['default']();
        WhitespaceControl.prototype.Program = function(program) {
          var doStandalone = !this.options.ignoreStandalone;
          var isRoot = !this.isRootSeen;
          this.isRootSeen = true;
          var body = program.body;
          for (var i = 0,
              l = body.length; i < l; i++) {
            var current = body[i],
                strip = this.accept(current);
            if (!strip) {
              continue;
            }
            var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
                _isNextWhitespace = isNextWhitespace(body, i, isRoot),
                openStandalone = strip.openStandalone && _isPrevWhitespace,
                closeStandalone = strip.closeStandalone && _isNextWhitespace,
                inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
            if (strip.close) {
              omitRight(body, i, true);
            }
            if (strip.open) {
              omitLeft(body, i, true);
            }
            if (doStandalone && inlineStandalone) {
              omitRight(body, i);
              if (omitLeft(body, i)) {
                if (current.type === 'PartialStatement') {
                  current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
                }
              }
            }
            if (doStandalone && openStandalone) {
              omitRight((current.program || current.inverse).body);
              omitLeft(body, i);
            }
            if (doStandalone && closeStandalone) {
              omitRight(body, i);
              omitLeft((current.inverse || current.program).body);
            }
          }
          return program;
        };
        WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
          this.accept(block.program);
          this.accept(block.inverse);
          var program = block.program || block.inverse,
              inverse = block.program && block.inverse,
              firstInverse = inverse,
              lastInverse = inverse;
          if (inverse && inverse.chained) {
            firstInverse = inverse.body[0].program;
            while (lastInverse.chained) {
              lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
            }
          }
          var strip = {
            open: block.openStrip.open,
            close: block.closeStrip.close,
            openStandalone: isNextWhitespace(program.body),
            closeStandalone: isPrevWhitespace((firstInverse || program).body)
          };
          if (block.openStrip.close) {
            omitRight(program.body, null, true);
          }
          if (inverse) {
            var inverseStrip = block.inverseStrip;
            if (inverseStrip.open) {
              omitLeft(program.body, null, true);
            }
            if (inverseStrip.close) {
              omitRight(firstInverse.body, null, true);
            }
            if (block.closeStrip.open) {
              omitLeft(lastInverse.body, null, true);
            }
            if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
              omitLeft(program.body);
              omitRight(firstInverse.body);
            }
          } else if (block.closeStrip.open) {
            omitLeft(program.body, null, true);
          }
          return strip;
        };
        WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
          return mustache.strip;
        };
        WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
          var strip = node.strip || {};
          return {
            inlineStandalone: true,
            open: strip.open,
            close: strip.close
          };
        };
        function isPrevWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = body.length;
          }
          var prev = body[i - 1],
              sibling = body[i - 2];
          if (!prev) {
            return isRoot;
          }
          if (prev.type === 'ContentStatement') {
            return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
          }
        }
        function isNextWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = -1;
          }
          var next = body[i + 1],
              sibling = body[i + 2];
          if (!next) {
            return isRoot;
          }
          if (next.type === 'ContentStatement') {
            return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
          }
        }
        function omitRight(body, i, multiple) {
          var current = body[i == null ? 0 : i + 1];
          if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
            return;
          }
          var original = current.value;
          current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
          current.rightStripped = current.value !== original;
        }
        function omitLeft(body, i, multiple) {
          var current = body[i == null ? body.length - 1 : i - 1];
          if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
            return;
          }
          var original = current.value;
          current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
          current.leftStripped = current.value !== original;
          return current.leftStripped;
        }
        exports['default'] = WhitespaceControl;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        function Visitor() {
          this.parents = [];
        }
        Visitor.prototype = {
          constructor: Visitor,
          mutating: false,
          acceptKey: function acceptKey(node, name) {
            var value = this.accept(node[name]);
            if (this.mutating) {
              if (value && !Visitor.prototype[value.type]) {
                throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
              }
              node[name] = value;
            }
          },
          acceptRequired: function acceptRequired(node, name) {
            this.acceptKey(node, name);
            if (!node[name]) {
              throw new _exception2['default'](node.type + ' requires ' + name);
            }
          },
          acceptArray: function acceptArray(array) {
            for (var i = 0,
                l = array.length; i < l; i++) {
              this.acceptKey(array, i);
              if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
              }
            }
          },
          accept: function accept(object) {
            if (!object) {
              return;
            }
            if (!this[object.type]) {
              throw new _exception2['default']('Unknown type: ' + object.type, object);
            }
            if (this.current) {
              this.parents.unshift(this.current);
            }
            this.current = object;
            var ret = this[object.type](object);
            this.current = this.parents.shift();
            if (!this.mutating || ret) {
              return ret;
            } else if (ret !== false) {
              return object;
            }
          },
          Program: function Program(program) {
            this.acceptArray(program.body);
          },
          MustacheStatement: visitSubExpression,
          Decorator: visitSubExpression,
          BlockStatement: visitBlock,
          DecoratorBlock: visitBlock,
          PartialStatement: visitPartial,
          PartialBlockStatement: function PartialBlockStatement(partial) {
            visitPartial.call(this, partial);
            this.acceptKey(partial, 'program');
          },
          ContentStatement: function ContentStatement() {},
          CommentStatement: function CommentStatement() {},
          SubExpression: visitSubExpression,
          PathExpression: function PathExpression() {},
          StringLiteral: function StringLiteral() {},
          NumberLiteral: function NumberLiteral() {},
          BooleanLiteral: function BooleanLiteral() {},
          UndefinedLiteral: function UndefinedLiteral() {},
          NullLiteral: function NullLiteral() {},
          Hash: function Hash(hash) {
            this.acceptArray(hash.pairs);
          },
          HashPair: function HashPair(pair) {
            this.acceptRequired(pair, 'value');
          }
        };
        function visitSubExpression(mustache) {
          this.acceptRequired(mustache, 'path');
          this.acceptArray(mustache.params);
          this.acceptKey(mustache, 'hash');
        }
        function visitBlock(block) {
          visitSubExpression.call(this, block);
          this.acceptKey(block, 'program');
          this.acceptKey(block, 'inverse');
        }
        function visitPartial(partial) {
          this.acceptRequired(partial, 'name');
          this.acceptArray(partial.params);
          this.acceptKey(partial, 'hash');
        }
        exports['default'] = Visitor;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.SourceLocation = SourceLocation;
        exports.id = id;
        exports.stripFlags = stripFlags;
        exports.stripComment = stripComment;
        exports.preparePath = preparePath;
        exports.prepareMustache = prepareMustache;
        exports.prepareRawBlock = prepareRawBlock;
        exports.prepareBlock = prepareBlock;
        exports.prepareProgram = prepareProgram;
        exports.preparePartialBlock = preparePartialBlock;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        function validateClose(open, close) {
          close = close.path ? close.path.original : close;
          if (open.path.original !== close) {
            var errorNode = {loc: open.path.loc};
            throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
          }
        }
        function SourceLocation(source, locInfo) {
          this.source = source;
          this.start = {
            line: locInfo.first_line,
            column: locInfo.first_column
          };
          this.end = {
            line: locInfo.last_line,
            column: locInfo.last_column
          };
        }
        function id(token) {
          if (/^\[.*\]$/.test(token)) {
            return token.substr(1, token.length - 2);
          } else {
            return token;
          }
        }
        function stripFlags(open, close) {
          return {
            open: open.charAt(2) === '~',
            close: close.charAt(close.length - 3) === '~'
          };
        }
        function stripComment(comment) {
          return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
        }
        function preparePath(data, parts, loc) {
          loc = this.locInfo(loc);
          var original = data ? '@' : '',
              dig = [],
              depth = 0,
              depthString = '';
          for (var i = 0,
              l = parts.length; i < l; i++) {
            var part = parts[i].part,
                isLiteral = parts[i].original !== part;
            original += (parts[i].separator || '') + part;
            if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
              if (dig.length > 0) {
                throw new _exception2['default']('Invalid path: ' + original, {loc: loc});
              } else if (part === '..') {
                depth++;
                depthString += '../';
              }
            } else {
              dig.push(part);
            }
          }
          return {
            type: 'PathExpression',
            data: data,
            depth: depth,
            parts: dig,
            original: original,
            loc: loc
          };
        }
        function prepareMustache(path, params, hash, open, strip, locInfo) {
          var escapeFlag = open.charAt(3) || open.charAt(2),
              escaped = escapeFlag !== '{' && escapeFlag !== '&';
          var decorator = /\*/.test(open);
          return {
            type: decorator ? 'Decorator' : 'MustacheStatement',
            path: path,
            params: params,
            hash: hash,
            escaped: escaped,
            strip: strip,
            loc: this.locInfo(locInfo)
          };
        }
        function prepareRawBlock(openRawBlock, contents, close, locInfo) {
          validateClose(openRawBlock, close);
          locInfo = this.locInfo(locInfo);
          var program = {
            type: 'Program',
            body: contents,
            strip: {},
            loc: locInfo
          };
          return {
            type: 'BlockStatement',
            path: openRawBlock.path,
            params: openRawBlock.params,
            hash: openRawBlock.hash,
            program: program,
            openStrip: {},
            inverseStrip: {},
            closeStrip: {},
            loc: locInfo
          };
        }
        function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
          if (close && close.path) {
            validateClose(openBlock, close);
          }
          var decorator = /\*/.test(openBlock.open);
          program.blockParams = openBlock.blockParams;
          var inverse = undefined,
              inverseStrip = undefined;
          if (inverseAndProgram) {
            if (decorator) {
              throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
            }
            if (inverseAndProgram.chain) {
              inverseAndProgram.program.body[0].closeStrip = close.strip;
            }
            inverseStrip = inverseAndProgram.strip;
            inverse = inverseAndProgram.program;
          }
          if (inverted) {
            inverted = inverse;
            inverse = program;
            program = inverted;
          }
          return {
            type: decorator ? 'DecoratorBlock' : 'BlockStatement',
            path: openBlock.path,
            params: openBlock.params,
            hash: openBlock.hash,
            program: program,
            inverse: inverse,
            openStrip: openBlock.strip,
            inverseStrip: inverseStrip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo)
          };
        }
        function prepareProgram(statements, loc) {
          if (!loc && statements.length) {
            var firstLoc = statements[0].loc,
                lastLoc = statements[statements.length - 1].loc;
            if (firstLoc && lastLoc) {
              loc = {
                source: firstLoc.source,
                start: {
                  line: firstLoc.start.line,
                  column: firstLoc.start.column
                },
                end: {
                  line: lastLoc.end.line,
                  column: lastLoc.end.column
                }
              };
            }
          }
          return {
            type: 'Program',
            body: statements,
            strip: {},
            loc: loc
          };
        }
        function preparePartialBlock(open, program, close, locInfo) {
          validateClose(open, close);
          return {
            type: 'PartialBlockStatement',
            name: open.path,
            params: open.params,
            hash: open.hash,
            program: program,
            openStrip: open.strip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo)
          };
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.Compiler = Compiler;
        exports.precompile = precompile;
        exports.compile = compile;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _utils = __webpack_require__(5);
        var _ast = __webpack_require__(21);
        var _ast2 = _interopRequireDefault(_ast);
        var slice = [].slice;
        function Compiler() {}
        Compiler.prototype = {
          compiler: Compiler,
          equals: function equals(other) {
            var len = this.opcodes.length;
            if (other.opcodes.length !== len) {
              return false;
            }
            for (var i = 0; i < len; i++) {
              var opcode = this.opcodes[i],
                  otherOpcode = other.opcodes[i];
              if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
                return false;
              }
            }
            len = this.children.length;
            for (var i = 0; i < len; i++) {
              if (!this.children[i].equals(other.children[i])) {
                return false;
              }
            }
            return true;
          },
          guid: 0,
          compile: function compile(program, options) {
            this.sourceNode = [];
            this.opcodes = [];
            this.children = [];
            this.options = options;
            this.stringParams = options.stringParams;
            this.trackIds = options.trackIds;
            options.blockParams = options.blockParams || [];
            var knownHelpers = options.knownHelpers;
            options.knownHelpers = {
              'helperMissing': true,
              'blockHelperMissing': true,
              'each': true,
              'if': true,
              'unless': true,
              'with': true,
              'log': true,
              'lookup': true
            };
            if (knownHelpers) {
              for (var _name in knownHelpers) {
                if (_name in knownHelpers) {
                  options.knownHelpers[_name] = knownHelpers[_name];
                }
              }
            }
            return this.accept(program);
          },
          compileProgram: function compileProgram(program) {
            var childCompiler = new this.compiler(),
                result = childCompiler.compile(program, this.options),
                guid = this.guid++;
            this.usePartial = this.usePartial || result.usePartial;
            this.children[guid] = result;
            this.useDepths = this.useDepths || result.useDepths;
            return guid;
          },
          accept: function accept(node) {
            if (!this[node.type]) {
              throw new _exception2['default']('Unknown type: ' + node.type, node);
            }
            this.sourceNode.unshift(node);
            var ret = this[node.type](node);
            this.sourceNode.shift();
            return ret;
          },
          Program: function Program(program) {
            this.options.blockParams.unshift(program.blockParams);
            var body = program.body,
                bodyLength = body.length;
            for (var i = 0; i < bodyLength; i++) {
              this.accept(body[i]);
            }
            this.options.blockParams.shift();
            this.isSimple = bodyLength === 1;
            this.blockParams = program.blockParams ? program.blockParams.length : 0;
            return this;
          },
          BlockStatement: function BlockStatement(block) {
            transformLiteralToPath(block);
            var program = block.program,
                inverse = block.inverse;
            program = program && this.compileProgram(program);
            inverse = inverse && this.compileProgram(inverse);
            var type = this.classifySexpr(block);
            if (type === 'helper') {
              this.helperSexpr(block, program, inverse);
            } else if (type === 'simple') {
              this.simpleSexpr(block);
              this.opcode('pushProgram', program);
              this.opcode('pushProgram', inverse);
              this.opcode('emptyHash');
              this.opcode('blockValue', block.path.original);
            } else {
              this.ambiguousSexpr(block, program, inverse);
              this.opcode('pushProgram', program);
              this.opcode('pushProgram', inverse);
              this.opcode('emptyHash');
              this.opcode('ambiguousBlockValue');
            }
            this.opcode('append');
          },
          DecoratorBlock: function DecoratorBlock(decorator) {
            var program = decorator.program && this.compileProgram(decorator.program);
            var params = this.setupFullMustacheParams(decorator, program, undefined),
                path = decorator.path;
            this.useDecorators = true;
            this.opcode('registerDecorator', params.length, path.original);
          },
          PartialStatement: function PartialStatement(partial) {
            this.usePartial = true;
            var program = partial.program;
            if (program) {
              program = this.compileProgram(partial.program);
            }
            var params = partial.params;
            if (params.length > 1) {
              throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
            } else if (!params.length) {
              if (this.options.explicitPartialContext) {
                this.opcode('pushLiteral', 'undefined');
              } else {
                params.push({
                  type: 'PathExpression',
                  parts: [],
                  depth: 0
                });
              }
            }
            var partialName = partial.name.original,
                isDynamic = partial.name.type === 'SubExpression';
            if (isDynamic) {
              this.accept(partial.name);
            }
            this.setupFullMustacheParams(partial, program, undefined, true);
            var indent = partial.indent || '';
            if (this.options.preventIndent && indent) {
              this.opcode('appendContent', indent);
              indent = '';
            }
            this.opcode('invokePartial', isDynamic, partialName, indent);
            this.opcode('append');
          },
          PartialBlockStatement: function PartialBlockStatement(partialBlock) {
            this.PartialStatement(partialBlock);
          },
          MustacheStatement: function MustacheStatement(mustache) {
            this.SubExpression(mustache);
            if (mustache.escaped && !this.options.noEscape) {
              this.opcode('appendEscaped');
            } else {
              this.opcode('append');
            }
          },
          Decorator: function Decorator(decorator) {
            this.DecoratorBlock(decorator);
          },
          ContentStatement: function ContentStatement(content) {
            if (content.value) {
              this.opcode('appendContent', content.value);
            }
          },
          CommentStatement: function CommentStatement() {},
          SubExpression: function SubExpression(sexpr) {
            transformLiteralToPath(sexpr);
            var type = this.classifySexpr(sexpr);
            if (type === 'simple') {
              this.simpleSexpr(sexpr);
            } else if (type === 'helper') {
              this.helperSexpr(sexpr);
            } else {
              this.ambiguousSexpr(sexpr);
            }
          },
          ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
            var path = sexpr.path,
                name = path.parts[0],
                isBlock = program != null || inverse != null;
            this.opcode('getContext', path.depth);
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            path.strict = true;
            this.accept(path);
            this.opcode('invokeAmbiguous', name, isBlock);
          },
          simpleSexpr: function simpleSexpr(sexpr) {
            var path = sexpr.path;
            path.strict = true;
            this.accept(path);
            this.opcode('resolvePossibleLambda');
          },
          helperSexpr: function helperSexpr(sexpr, program, inverse) {
            var params = this.setupFullMustacheParams(sexpr, program, inverse),
                path = sexpr.path,
                name = path.parts[0];
            if (this.options.knownHelpers[name]) {
              this.opcode('invokeKnownHelper', params.length, name);
            } else if (this.options.knownHelpersOnly) {
              throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
            } else {
              path.strict = true;
              path.falsy = true;
              this.accept(path);
              this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
            }
          },
          PathExpression: function PathExpression(path) {
            this.addDepth(path.depth);
            this.opcode('getContext', path.depth);
            var name = path.parts[0],
                scoped = _ast2['default'].helpers.scopedId(path),
                blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
            if (blockParamId) {
              this.opcode('lookupBlockParam', blockParamId, path.parts);
            } else if (!name) {
              this.opcode('pushContext');
            } else if (path.data) {
              this.options.data = true;
              this.opcode('lookupData', path.depth, path.parts, path.strict);
            } else {
              this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
            }
          },
          StringLiteral: function StringLiteral(string) {
            this.opcode('pushString', string.value);
          },
          NumberLiteral: function NumberLiteral(number) {
            this.opcode('pushLiteral', number.value);
          },
          BooleanLiteral: function BooleanLiteral(bool) {
            this.opcode('pushLiteral', bool.value);
          },
          UndefinedLiteral: function UndefinedLiteral() {
            this.opcode('pushLiteral', 'undefined');
          },
          NullLiteral: function NullLiteral() {
            this.opcode('pushLiteral', 'null');
          },
          Hash: function Hash(hash) {
            var pairs = hash.pairs,
                i = 0,
                l = pairs.length;
            this.opcode('pushHash');
            for (; i < l; i++) {
              this.pushParam(pairs[i].value);
            }
            while (i--) {
              this.opcode('assignToHash', pairs[i].key);
            }
            this.opcode('popHash');
          },
          opcode: function opcode(name) {
            this.opcodes.push({
              opcode: name,
              args: slice.call(arguments, 1),
              loc: this.sourceNode[0].loc
            });
          },
          addDepth: function addDepth(depth) {
            if (!depth) {
              return;
            }
            this.useDepths = true;
          },
          classifySexpr: function classifySexpr(sexpr) {
            var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);
            var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
            var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);
            var isEligible = !isBlockParam && (isHelper || isSimple);
            if (isEligible && !isHelper) {
              var _name2 = sexpr.path.parts[0],
                  options = this.options;
              if (options.knownHelpers[_name2]) {
                isHelper = true;
              } else if (options.knownHelpersOnly) {
                isEligible = false;
              }
            }
            if (isHelper) {
              return 'helper';
            } else if (isEligible) {
              return 'ambiguous';
            } else {
              return 'simple';
            }
          },
          pushParams: function pushParams(params) {
            for (var i = 0,
                l = params.length; i < l; i++) {
              this.pushParam(params[i]);
            }
          },
          pushParam: function pushParam(val) {
            var value = val.value != null ? val.value : val.original || '';
            if (this.stringParams) {
              if (value.replace) {
                value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
              }
              if (val.depth) {
                this.addDepth(val.depth);
              }
              this.opcode('getContext', val.depth || 0);
              this.opcode('pushStringParam', value, val.type);
              if (val.type === 'SubExpression') {
                this.accept(val);
              }
            } else {
              if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
                  blockParamIndex = this.blockParamIndex(val.parts[0]);
                }
                if (blockParamIndex) {
                  var blockParamChild = val.parts.slice(1).join('.');
                  this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                } else {
                  value = val.original || value;
                  if (value.replace) {
                    value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                  }
                  this.opcode('pushId', val.type, value);
                }
              }
              this.accept(val);
            }
          },
          setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
            var params = sexpr.params;
            this.pushParams(params);
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            if (sexpr.hash) {
              this.accept(sexpr.hash);
            } else {
              this.opcode('emptyHash', omitEmpty);
            }
            return params;
          },
          blockParamIndex: function blockParamIndex(name) {
            for (var depth = 0,
                len = this.options.blockParams.length; depth < len; depth++) {
              var blockParams = this.options.blockParams[depth],
                  param = blockParams && _utils.indexOf(blockParams, name);
              if (blockParams && param >= 0) {
                return [depth, param];
              }
            }
          }
        };
        function precompile(input, options, env) {
          if (input == null || typeof input !== 'string' && input.type !== 'Program') {
            throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
          }
          options = options || {};
          if (!('data' in options)) {
            options.data = true;
          }
          if (options.compat) {
            options.useDepths = true;
          }
          var ast = env.parse(input, options),
              environment = new env.Compiler().compile(ast, options);
          return new env.JavaScriptCompiler().compile(environment, options);
        }
        function compile(input, options, env) {
          if (options === undefined)
            options = {};
          if (input == null || typeof input !== 'string' && input.type !== 'Program') {
            throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
          }
          if (!('data' in options)) {
            options.data = true;
          }
          if (options.compat) {
            options.useDepths = true;
          }
          var compiled = undefined;
          function compileInput() {
            var ast = env.parse(input, options),
                environment = new env.Compiler().compile(ast, options),
                templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
            return env.template(templateSpec);
          }
          function ret(context, execOptions) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled.call(this, context, execOptions);
          }
          ret._setup = function(setupOptions) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled._setup(setupOptions);
          };
          ret._child = function(i, data, blockParams, depths) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled._child(i, data, blockParams, depths);
          };
          return ret;
        }
        function argEquals(a, b) {
          if (a === b) {
            return true;
          }
          if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
            for (var i = 0; i < a.length; i++) {
              if (!argEquals(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
        }
        function transformLiteralToPath(sexpr) {
          if (!sexpr.path.parts) {
            var literal = sexpr.path;
            sexpr.path = {
              type: 'PathExpression',
              data: false,
              depth: 0,
              parts: [literal.original + ''],
              original: literal.original + '',
              loc: literal.loc
            };
          }
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _base = __webpack_require__(4);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _utils = __webpack_require__(5);
        var _codeGen = __webpack_require__(29);
        var _codeGen2 = _interopRequireDefault(_codeGen);
        function Literal(value) {
          this.value = value;
        }
        function JavaScriptCompiler() {}
        JavaScriptCompiler.prototype = {
          nameLookup: function nameLookup(parent, name) {
            if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
              return [parent, '.', name];
            } else {
              return [parent, '[', JSON.stringify(name), ']'];
            }
          },
          depthedLookup: function depthedLookup(name) {
            return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
          },
          compilerInfo: function compilerInfo() {
            var revision = _base.COMPILER_REVISION,
                versions = _base.REVISION_CHANGES[revision];
            return [revision, versions];
          },
          appendToBuffer: function appendToBuffer(source, location, explicit) {
            if (!_utils.isArray(source)) {
              source = [source];
            }
            source = this.source.wrap(source, location);
            if (this.environment.isSimple) {
              return ['return ', source, ';'];
            } else if (explicit) {
              return ['buffer += ', source, ';'];
            } else {
              source.appendToBuffer = true;
              return source;
            }
          },
          initializeBuffer: function initializeBuffer() {
            return this.quotedString('');
          },
          compile: function compile(environment, options, context, asObject) {
            this.environment = environment;
            this.options = options;
            this.stringParams = this.options.stringParams;
            this.trackIds = this.options.trackIds;
            this.precompile = !asObject;
            this.name = this.environment.name;
            this.isChild = !!context;
            this.context = context || {
              decorators: [],
              programs: [],
              environments: []
            };
            this.preamble();
            this.stackSlot = 0;
            this.stackVars = [];
            this.aliases = {};
            this.registers = {list: []};
            this.hashes = [];
            this.compileStack = [];
            this.inlineStack = [];
            this.blockParams = [];
            this.compileChildren(environment, options);
            this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
            this.useBlockParams = this.useBlockParams || environment.useBlockParams;
            var opcodes = environment.opcodes,
                opcode = undefined,
                firstLoc = undefined,
                i = undefined,
                l = undefined;
            for (i = 0, l = opcodes.length; i < l; i++) {
              opcode = opcodes[i];
              this.source.currentLocation = opcode.loc;
              firstLoc = firstLoc || opcode.loc;
              this[opcode.opcode].apply(this, opcode.args);
            }
            this.source.currentLocation = firstLoc;
            this.pushSource('');
            if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
              throw new _exception2['default']('Compile completed with content left on stack');
            }
            if (!this.decorators.isEmpty()) {
              this.useDecorators = true;
              this.decorators.prepend('var decorators = container.decorators;\n');
              this.decorators.push('return fn;');
              if (asObject) {
                this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
              } else {
                this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                this.decorators.push('}\n');
                this.decorators = this.decorators.merge();
              }
            } else {
              this.decorators = undefined;
            }
            var fn = this.createFunctionContext(asObject);
            if (!this.isChild) {
              var ret = {
                compiler: this.compilerInfo(),
                main: fn
              };
              if (this.decorators) {
                ret.main_d = this.decorators;
                ret.useDecorators = true;
              }
              var _context = this.context;
              var programs = _context.programs;
              var decorators = _context.decorators;
              for (i = 0, l = programs.length; i < l; i++) {
                if (programs[i]) {
                  ret[i] = programs[i];
                  if (decorators[i]) {
                    ret[i + '_d'] = decorators[i];
                    ret.useDecorators = true;
                  }
                }
              }
              if (this.environment.usePartial) {
                ret.usePartial = true;
              }
              if (this.options.data) {
                ret.useData = true;
              }
              if (this.useDepths) {
                ret.useDepths = true;
              }
              if (this.useBlockParams) {
                ret.useBlockParams = true;
              }
              if (this.options.compat) {
                ret.compat = true;
              }
              if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {start: {
                    line: 1,
                    column: 0
                  }};
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                  ret = ret.toStringWithSourceMap({file: options.destName});
                  ret.map = ret.map && ret.map.toString();
                } else {
                  ret = ret.toString();
                }
              } else {
                ret.compilerOptions = this.options;
              }
              return ret;
            } else {
              return fn;
            }
          },
          preamble: function preamble() {
            this.lastContext = 0;
            this.source = new _codeGen2['default'](this.options.srcName);
            this.decorators = new _codeGen2['default'](this.options.srcName);
          },
          createFunctionContext: function createFunctionContext(asObject) {
            var varDeclarations = '';
            var locals = this.stackVars.concat(this.registers.list);
            if (locals.length > 0) {
              varDeclarations += ', ' + locals.join(', ');
            }
            var aliasCount = 0;
            for (var alias in this.aliases) {
              var node = this.aliases[alias];
              if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
                varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                node.children[0] = 'alias' + aliasCount;
              }
            }
            var params = ['container', 'depth0', 'helpers', 'partials', 'data'];
            if (this.useBlockParams || this.useDepths) {
              params.push('blockParams');
            }
            if (this.useDepths) {
              params.push('depths');
            }
            var source = this.mergeSource(varDeclarations);
            if (asObject) {
              params.push(source);
              return Function.apply(this, params);
            } else {
              return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
            }
          },
          mergeSource: function mergeSource(varDeclarations) {
            var isSimple = this.environment.isSimple,
                appendOnly = !this.forceBuffer,
                appendFirst = undefined,
                sourceSeen = undefined,
                bufferStart = undefined,
                bufferEnd = undefined;
            this.source.each(function(line) {
              if (line.appendToBuffer) {
                if (bufferStart) {
                  line.prepend('  + ');
                } else {
                  bufferStart = line;
                }
                bufferEnd = line;
              } else {
                if (bufferStart) {
                  if (!sourceSeen) {
                    appendFirst = true;
                  } else {
                    bufferStart.prepend('buffer += ');
                  }
                  bufferEnd.add(';');
                  bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) {
                  appendOnly = false;
                }
              }
            });
            if (appendOnly) {
              if (bufferStart) {
                bufferStart.prepend('return ');
                bufferEnd.add(';');
              } else if (!sourceSeen) {
                this.source.push('return "";');
              }
            } else {
              varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
              if (bufferStart) {
                bufferStart.prepend('return buffer + ');
                bufferEnd.add(';');
              } else {
                this.source.push('return buffer;');
              }
            }
            if (varDeclarations) {
              this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
            }
            return this.source.merge();
          },
          blockValue: function blockValue(name) {
            var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                params = [this.contextName(0)];
            this.setupHelperArgs(name, 0, params);
            var blockName = this.popStack();
            params.splice(1, 0, blockName);
            this.push(this.source.functionCall(blockHelperMissing, 'call', params));
          },
          ambiguousBlockValue: function ambiguousBlockValue() {
            var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                params = [this.contextName(0)];
            this.setupHelperArgs('', 0, params, true);
            this.flushInline();
            var current = this.topStack();
            params.splice(1, 0, current);
            this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
          },
          appendContent: function appendContent(content) {
            if (this.pendingContent) {
              content = this.pendingContent + content;
            } else {
              this.pendingLocation = this.source.currentLocation;
            }
            this.pendingContent = content;
          },
          append: function append() {
            if (this.isInline()) {
              this.replaceStack(function(current) {
                return [' != null ? ', current, ' : ""'];
              });
              this.pushSource(this.appendToBuffer(this.popStack()));
            } else {
              var local = this.popStack();
              this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
              if (this.environment.isSimple) {
                this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
              }
            }
          },
          appendEscaped: function appendEscaped() {
            this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
          },
          getContext: function getContext(depth) {
            this.lastContext = depth;
          },
          pushContext: function pushContext() {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
            var i = 0;
            if (!scoped && this.options.compat && !this.lastContext) {
              this.push(this.depthedLookup(parts[i++]));
            } else {
              this.pushContext();
            }
            this.resolvePath('context', parts, i, falsy, strict);
          },
          lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
            this.useBlockParams = true;
            this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
            this.resolvePath('context', parts, 1);
          },
          lookupData: function lookupData(depth, parts, strict) {
            if (!depth) {
              this.pushStackLiteral('data');
            } else {
              this.pushStackLiteral('container.data(data, ' + depth + ')');
            }
            this.resolvePath('data', parts, 0, true, strict);
          },
          resolvePath: function resolvePath(type, parts, i, falsy, strict) {
            var _this = this;
            if (this.options.strict || this.options.assumeObjects) {
              this.push(strictLookup(this.options.strict && strict, this, parts, type));
              return;
            }
            var len = parts.length;
            for (; i < len; i++) {
              this.replaceStack(function(current) {
                var lookup = _this.nameLookup(current, parts[i], type);
                if (!falsy) {
                  return [' != null ? ', lookup, ' : ', current];
                } else {
                  return [' && ', lookup];
                }
              });
            }
          },
          resolvePossibleLambda: function resolvePossibleLambda() {
            this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
          },
          pushStringParam: function pushStringParam(string, type) {
            this.pushContext();
            this.pushString(type);
            if (type !== 'SubExpression') {
              if (typeof string === 'string') {
                this.pushString(string);
              } else {
                this.pushStackLiteral(string);
              }
            }
          },
          emptyHash: function emptyHash(omitEmpty) {
            if (this.trackIds) {
              this.push('{}');
            }
            if (this.stringParams) {
              this.push('{}');
              this.push('{}');
            }
            this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
          },
          pushHash: function pushHash() {
            if (this.hash) {
              this.hashes.push(this.hash);
            }
            this.hash = {
              values: [],
              types: [],
              contexts: [],
              ids: []
            };
          },
          popHash: function popHash() {
            var hash = this.hash;
            this.hash = this.hashes.pop();
            if (this.trackIds) {
              this.push(this.objectLiteral(hash.ids));
            }
            if (this.stringParams) {
              this.push(this.objectLiteral(hash.contexts));
              this.push(this.objectLiteral(hash.types));
            }
            this.push(this.objectLiteral(hash.values));
          },
          pushString: function pushString(string) {
            this.pushStackLiteral(this.quotedString(string));
          },
          pushLiteral: function pushLiteral(value) {
            this.pushStackLiteral(value);
          },
          pushProgram: function pushProgram(guid) {
            if (guid != null) {
              this.pushStackLiteral(this.programExpression(guid));
            } else {
              this.pushStackLiteral(null);
            }
          },
          registerDecorator: function registerDecorator(paramSize, name) {
            var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
                options = this.setupHelperArgs(name, paramSize);
            this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
          },
          invokeHelper: function invokeHelper(paramSize, name, isSimple) {
            var nonHelper = this.popStack(),
                helper = this.setupHelper(paramSize, name),
                simple = isSimple ? [helper.name, ' || '] : '';
            var lookup = ['('].concat(simple, nonHelper);
            if (!this.options.strict) {
              lookup.push(' || ', this.aliasable('helpers.helperMissing'));
            }
            lookup.push(')');
            this.push(this.source.functionCall(lookup, 'call', helper.callParams));
          },
          invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
          },
          invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
            this.useRegister('helper');
            var nonHelper = this.popStack();
            this.emptyHash();
            var helper = this.setupHelper(0, name, helperCall);
            var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
            var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
            if (!this.options.strict) {
              lookup[0] = '(helper = ';
              lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
            }
            this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
          },
          invokePartial: function invokePartial(isDynamic, name, indent) {
            var params = [],
                options = this.setupParams(name, 1, params);
            if (isDynamic) {
              name = this.popStack();
              delete options.name;
            }
            if (indent) {
              options.indent = JSON.stringify(indent);
            }
            options.helpers = 'helpers';
            options.partials = 'partials';
            options.decorators = 'container.decorators';
            if (!isDynamic) {
              params.unshift(this.nameLookup('partials', name, 'partial'));
            } else {
              params.unshift(name);
            }
            if (this.options.compat) {
              options.depths = 'depths';
            }
            options = this.objectLiteral(options);
            params.push(options);
            this.push(this.source.functionCall('container.invokePartial', '', params));
          },
          assignToHash: function assignToHash(key) {
            var value = this.popStack(),
                context = undefined,
                type = undefined,
                id = undefined;
            if (this.trackIds) {
              id = this.popStack();
            }
            if (this.stringParams) {
              type = this.popStack();
              context = this.popStack();
            }
            var hash = this.hash;
            if (context) {
              hash.contexts[key] = context;
            }
            if (type) {
              hash.types[key] = type;
            }
            if (id) {
              hash.ids[key] = id;
            }
            hash.values[key] = value;
          },
          pushId: function pushId(type, name, child) {
            if (type === 'BlockParam') {
              this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
            } else if (type === 'PathExpression') {
              this.pushString(name);
            } else if (type === 'SubExpression') {
              this.pushStackLiteral('true');
            } else {
              this.pushStackLiteral('null');
            }
          },
          compiler: JavaScriptCompiler,
          compileChildren: function compileChildren(environment, options) {
            var children = environment.children,
                child = undefined,
                compiler = undefined;
            for (var i = 0,
                l = children.length; i < l; i++) {
              child = children[i];
              compiler = new this.compiler();
              var index = this.matchExistingProgram(child);
              if (index == null) {
                this.context.programs.push('');
                index = this.context.programs.length;
                child.index = index;
                child.name = 'program' + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
              } else {
                child.index = index;
                child.name = 'program' + index;
                this.useDepths = this.useDepths || child.useDepths;
                this.useBlockParams = this.useBlockParams || child.useBlockParams;
              }
            }
          },
          matchExistingProgram: function matchExistingProgram(child) {
            for (var i = 0,
                len = this.context.environments.length; i < len; i++) {
              var environment = this.context.environments[i];
              if (environment && environment.equals(child)) {
                return i;
              }
            }
          },
          programExpression: function programExpression(guid) {
            var child = this.environment.children[guid],
                programParams = [child.index, 'data', child.blockParams];
            if (this.useBlockParams || this.useDepths) {
              programParams.push('blockParams');
            }
            if (this.useDepths) {
              programParams.push('depths');
            }
            return 'container.program(' + programParams.join(', ') + ')';
          },
          useRegister: function useRegister(name) {
            if (!this.registers[name]) {
              this.registers[name] = true;
              this.registers.list.push(name);
            }
          },
          push: function push(expr) {
            if (!(expr instanceof Literal)) {
              expr = this.source.wrap(expr);
            }
            this.inlineStack.push(expr);
            return expr;
          },
          pushStackLiteral: function pushStackLiteral(item) {
            this.push(new Literal(item));
          },
          pushSource: function pushSource(source) {
            if (this.pendingContent) {
              this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
              this.pendingContent = undefined;
            }
            if (source) {
              this.source.push(source);
            }
          },
          replaceStack: function replaceStack(callback) {
            var prefix = ['('],
                stack = undefined,
                createdStack = undefined,
                usedLiteral = undefined;
            if (!this.isInline()) {
              throw new _exception2['default']('replaceStack on non-inline');
            }
            var top = this.popStack(true);
            if (top instanceof Literal) {
              stack = [top.value];
              prefix = ['(', stack];
              usedLiteral = true;
            } else {
              createdStack = true;
              var _name = this.incrStack();
              prefix = ['((', this.push(_name), ' = ', top, ')'];
              stack = this.topStack();
            }
            var item = callback.call(this, stack);
            if (!usedLiteral) {
              this.popStack();
            }
            if (createdStack) {
              this.stackSlot--;
            }
            this.push(prefix.concat(item, ')'));
          },
          incrStack: function incrStack() {
            this.stackSlot++;
            if (this.stackSlot > this.stackVars.length) {
              this.stackVars.push('stack' + this.stackSlot);
            }
            return this.topStackName();
          },
          topStackName: function topStackName() {
            return 'stack' + this.stackSlot;
          },
          flushInline: function flushInline() {
            var inlineStack = this.inlineStack;
            this.inlineStack = [];
            for (var i = 0,
                len = inlineStack.length; i < len; i++) {
              var entry = inlineStack[i];
              if (entry instanceof Literal) {
                this.compileStack.push(entry);
              } else {
                var stack = this.incrStack();
                this.pushSource([stack, ' = ', entry, ';']);
                this.compileStack.push(stack);
              }
            }
          },
          isInline: function isInline() {
            return this.inlineStack.length;
          },
          popStack: function popStack(wrapped) {
            var inline = this.isInline(),
                item = (inline ? this.inlineStack : this.compileStack).pop();
            if (!wrapped && item instanceof Literal) {
              return item.value;
            } else {
              if (!inline) {
                if (!this.stackSlot) {
                  throw new _exception2['default']('Invalid stack pop');
                }
                this.stackSlot--;
              }
              return item;
            }
          },
          topStack: function topStack() {
            var stack = this.isInline() ? this.inlineStack : this.compileStack,
                item = stack[stack.length - 1];
            if (item instanceof Literal) {
              return item.value;
            } else {
              return item;
            }
          },
          contextName: function contextName(context) {
            if (this.useDepths && context) {
              return 'depths[' + context + ']';
            } else {
              return 'depth' + context;
            }
          },
          quotedString: function quotedString(str) {
            return this.source.quotedString(str);
          },
          objectLiteral: function objectLiteral(obj) {
            return this.source.objectLiteral(obj);
          },
          aliasable: function aliasable(name) {
            var ret = this.aliases[name];
            if (ret) {
              ret.referenceCount++;
              return ret;
            }
            ret = this.aliases[name] = this.source.wrap(name);
            ret.aliasable = true;
            ret.referenceCount = 1;
            return ret;
          },
          setupHelper: function setupHelper(paramSize, name, blockHelper) {
            var params = [],
                paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
            var foundHelper = this.nameLookup('helpers', name, 'helper'),
                callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');
            return {
              params: params,
              paramsInit: paramsInit,
              name: foundHelper,
              callParams: [callContext].concat(params)
            };
          },
          setupParams: function setupParams(helper, paramSize, params) {
            var options = {},
                contexts = [],
                types = [],
                ids = [],
                objectArgs = !params,
                param = undefined;
            if (objectArgs) {
              params = [];
            }
            options.name = this.quotedString(helper);
            options.hash = this.popStack();
            if (this.trackIds) {
              options.hashIds = this.popStack();
            }
            if (this.stringParams) {
              options.hashTypes = this.popStack();
              options.hashContexts = this.popStack();
            }
            var inverse = this.popStack(),
                program = this.popStack();
            if (program || inverse) {
              options.fn = program || 'container.noop';
              options.inverse = inverse || 'container.noop';
            }
            var i = paramSize;
            while (i--) {
              param = this.popStack();
              params[i] = param;
              if (this.trackIds) {
                ids[i] = this.popStack();
              }
              if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
              }
            }
            if (objectArgs) {
              options.args = this.source.generateArray(params);
            }
            if (this.trackIds) {
              options.ids = this.source.generateArray(ids);
            }
            if (this.stringParams) {
              options.types = this.source.generateArray(types);
              options.contexts = this.source.generateArray(contexts);
            }
            if (this.options.data) {
              options.data = 'data';
            }
            if (this.useBlockParams) {
              options.blockParams = 'blockParams';
            }
            return options;
          },
          setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
            var options = this.setupParams(helper, paramSize, params);
            options = this.objectLiteral(options);
            if (useRegister) {
              this.useRegister('options');
              params.push('options');
              return ['options=', options];
            } else if (params) {
              params.push(options);
              return '';
            } else {
              return options;
            }
          }
        };
        (function() {
          var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');
          var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
          for (var i = 0,
              l = reservedWords.length; i < l; i++) {
            compilerWords[reservedWords[i]] = true;
          }
        })();
        JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
          return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
        };
        function strictLookup(requireTerminal, compiler, parts, type) {
          var stack = compiler.popStack(),
              i = 0,
              len = parts.length;
          if (requireTerminal) {
            len--;
          }
          for (; i < len; i++) {
            stack = compiler.nameLookup(stack, parts[i], type);
          }
          if (requireTerminal) {
            return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
          } else {
            return stack;
          }
        }
        exports['default'] = JavaScriptCompiler;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var SourceNode = undefined;
        try {
          if (false) {
            var SourceMap = require('source-map');
            SourceNode = SourceMap.SourceNode;
          }
        } catch (err) {}
        if (!SourceNode) {
          SourceNode = function(line, column, srcFile, chunks) {
            this.src = '';
            if (chunks) {
              this.add(chunks);
            }
          };
          SourceNode.prototype = {
            add: function add(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join('');
              }
              this.src += chunks;
            },
            prepend: function prepend(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join('');
              }
              this.src = chunks + this.src;
            },
            toStringWithSourceMap: function toStringWithSourceMap() {
              return {code: this.toString()};
            },
            toString: function toString() {
              return this.src;
            }
          };
        }
        function castChunk(chunk, codeGen, loc) {
          if (_utils.isArray(chunk)) {
            var ret = [];
            for (var i = 0,
                len = chunk.length; i < len; i++) {
              ret.push(codeGen.wrap(chunk[i], loc));
            }
            return ret;
          } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
            return chunk + '';
          }
          return chunk;
        }
        function CodeGen(srcFile) {
          this.srcFile = srcFile;
          this.source = [];
        }
        CodeGen.prototype = {
          isEmpty: function isEmpty() {
            return !this.source.length;
          },
          prepend: function prepend(source, loc) {
            this.source.unshift(this.wrap(source, loc));
          },
          push: function push(source, loc) {
            this.source.push(this.wrap(source, loc));
          },
          merge: function merge() {
            var source = this.empty();
            this.each(function(line) {
              source.add(['  ', line, '\n']);
            });
            return source;
          },
          each: function each(iter) {
            for (var i = 0,
                len = this.source.length; i < len; i++) {
              iter(this.source[i]);
            }
          },
          empty: function empty() {
            var loc = this.currentLocation || {start: {}};
            return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
          },
          wrap: function wrap(chunk) {
            var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {start: {}} : arguments[1];
            if (chunk instanceof SourceNode) {
              return chunk;
            }
            chunk = castChunk(chunk, this, loc);
            return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
          },
          functionCall: function functionCall(fn, type, params) {
            params = this.generateList(params);
            return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
          },
          quotedString: function quotedString(str) {
            return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
          },
          objectLiteral: function objectLiteral(obj) {
            var pairs = [];
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                var value = castChunk(obj[key], this);
                if (value !== 'undefined') {
                  pairs.push([this.quotedString(key), ':', value]);
                }
              }
            }
            var ret = this.generateList(pairs);
            ret.prepend('{');
            ret.add('}');
            return ret;
          },
          generateList: function generateList(entries) {
            var ret = this.empty();
            for (var i = 0,
                len = entries.length; i < len; i++) {
              if (i) {
                ret.add(',');
              }
              ret.add(castChunk(entries[i], this));
            }
            return ret;
          },
          generateArray: function generateArray(entries) {
            var ret = this.generateList(entries);
            ret.prepend('[');
            ret.add(']');
            return ret;
          }
        };
        exports['default'] = CodeGen;
        module.exports = exports['default'];
      }]);
    });
    ;
  })();
  return _retrieveGlobal();
});

System.registerDynamic("github:components/handlebars.js@4.0.5.js", ["github:components/handlebars.js@4.0.5/handlebars.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.5/handlebars.js');
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("src/components/search.hbs!github:systemjs/plugin-text@0.0.4.js", [], function() {
  return "<div id=\"search\">\n    <input data-bind=\"value: text\" type=\"text\">\n    <button data-bind=\"click: search\" >Search</button>\n</div>\n";
});

_removeDefine();
})();
System.registerDynamic("src/components/search.js", ["github:knockout/knockout@3.4.0.js", "src/components/search.scss!github:theefer/plugin-sass@master.js", "github:components/handlebars.js@4.0.5.js", "src/components/search.hbs!github:systemjs/plugin-text@0.0.4.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ko = $__require('github:knockout/knockout@3.4.0.js');
  function init(action) {
    var myViewModel = function() {
      this.text = ko.observable('jeans');
      this.search = action;
    };
    $__require('src/components/search.scss!github:theefer/plugin-sass@master.js');
    var handlebars = $__require('github:components/handlebars.js@4.0.5.js');
    var searchTemplate = handlebars.compile($__require('src/components/search.hbs!github:systemjs/plugin-text@0.0.4.js'));
    ko.components.register('search-box', {
      template: searchTemplate(),
      viewModel: myViewModel
    });
    ko.applyBindings();
  }
  module.exports = {init: init};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("src/app.js", ["src/components/search.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var search = $__require('src/components/search.js');
  search.init(alert);
  global.define = __define;
  return module.exports;
});

System.register('src/components/search.scss!github:theefer/plugin-sass@master.js', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("#search button {\n  background-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJInNvdXJjZVJvb3QiOiAicm9vdCIsCgkiZmlsZSI6ICJzdGRvdXQiLAoJInNvdXJjZXMiOiBbCgkJIlVzZXJzL3Jtb3JhaXMvUHJvamVjdHMvZXhhbXBsZXMvanNwbS10ZXN0L3NyYy9jb21wb25lbnRzL3NlYXJjaC5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiI3NlYXJjaCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuIgoJXSwKCSJtYXBwaW5ncyI6ICJBQUFBLEFBQVEsT0FBRCxDQUFDLE1BQU0sQ0FBQztFQUNYLGdCQUFnQixFQUFFLEtBQU0sR0FDM0IiLAoJIm5hbWVzIjogW10KfQ== */");
//# sourceMappingURL=build.js.map