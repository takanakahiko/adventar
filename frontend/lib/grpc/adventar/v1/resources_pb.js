// source: adventar/v1/resources.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.adventar.v1.Calendar', null, global);
goog.exportSymbol('proto.adventar.v1.CalendarStat', null, global);
goog.exportSymbol('proto.adventar.v1.Entry', null, global);
goog.exportSymbol('proto.adventar.v1.User', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adventar.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adventar.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adventar.v1.User.displayName = 'proto.adventar.v1.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adventar.v1.Calendar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adventar.v1.Calendar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adventar.v1.Calendar.displayName = 'proto.adventar.v1.Calendar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adventar.v1.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adventar.v1.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adventar.v1.Entry.displayName = 'proto.adventar.v1.Entry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adventar.v1.CalendarStat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adventar.v1.CalendarStat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adventar.v1.CalendarStat.displayName = 'proto.adventar.v1.CalendarStat';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adventar.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.adventar.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adventar.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iconUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adventar.v1.User}
 */
proto.adventar.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adventar.v1.User;
  return proto.adventar.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adventar.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adventar.v1.User}
 */
proto.adventar.v1.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIconUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adventar.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adventar.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adventar.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIconUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.adventar.v1.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.User} returns this
 */
proto.adventar.v1.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.adventar.v1.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.User} returns this
 */
proto.adventar.v1.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon_url = 3;
 * @return {string}
 */
proto.adventar.v1.User.prototype.getIconUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.User} returns this
 */
proto.adventar.v1.User.prototype.setIconUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adventar.v1.Calendar.prototype.toObject = function(opt_includeInstance) {
  return proto.adventar.v1.Calendar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adventar.v1.Calendar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.Calendar.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owner: (f = msg.getOwner()) && proto.adventar.v1.User.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    year: jspb.Message.getFieldWithDefault(msg, 5, 0),
    entryCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adventar.v1.Calendar}
 */
proto.adventar.v1.Calendar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adventar.v1.Calendar;
  return proto.adventar.v1.Calendar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adventar.v1.Calendar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adventar.v1.Calendar}
 */
proto.adventar.v1.Calendar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.adventar.v1.User;
      reader.readMessage(value,proto.adventar.v1.User.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEntryCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adventar.v1.Calendar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adventar.v1.Calendar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adventar.v1.Calendar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.Calendar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.adventar.v1.User.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getEntryCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.adventar.v1.Calendar.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional User owner = 2;
 * @return {?proto.adventar.v1.User}
 */
proto.adventar.v1.Calendar.prototype.getOwner = function() {
  return /** @type{?proto.adventar.v1.User} */ (
    jspb.Message.getWrapperField(this, proto.adventar.v1.User, 2));
};


/**
 * @param {?proto.adventar.v1.User|undefined} value
 * @return {!proto.adventar.v1.Calendar} returns this
*/
proto.adventar.v1.Calendar.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adventar.v1.Calendar.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.adventar.v1.Calendar.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.adventar.v1.Calendar.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 year = 5;
 * @return {number}
 */
proto.adventar.v1.Calendar.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 entry_count = 6;
 * @return {number}
 */
proto.adventar.v1.Calendar.prototype.getEntryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.Calendar} returns this
 */
proto.adventar.v1.Calendar.prototype.setEntryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adventar.v1.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.adventar.v1.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adventar.v1.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    owner: (f = msg.getOwner()) && proto.adventar.v1.User.toObject(includeInstance, f),
    calendar: (f = msg.getCalendar()) && proto.adventar.v1.Calendar.toObject(includeInstance, f),
    day: jspb.Message.getFieldWithDefault(msg, 4, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 5, ""),
    url: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adventar.v1.Entry}
 */
proto.adventar.v1.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adventar.v1.Entry;
  return proto.adventar.v1.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adventar.v1.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adventar.v1.Entry}
 */
proto.adventar.v1.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.adventar.v1.User;
      reader.readMessage(value,proto.adventar.v1.User.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 3:
      var value = new proto.adventar.v1.Calendar;
      reader.readMessage(value,proto.adventar.v1.Calendar.deserializeBinaryFromReader);
      msg.setCalendar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adventar.v1.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adventar.v1.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adventar.v1.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.adventar.v1.User.serializeBinaryToWriter
    );
  }
  f = message.getCalendar();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.adventar.v1.Calendar.serializeBinaryToWriter
    );
  }
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.adventar.v1.Entry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional User owner = 2;
 * @return {?proto.adventar.v1.User}
 */
proto.adventar.v1.Entry.prototype.getOwner = function() {
  return /** @type{?proto.adventar.v1.User} */ (
    jspb.Message.getWrapperField(this, proto.adventar.v1.User, 2));
};


/**
 * @param {?proto.adventar.v1.User|undefined} value
 * @return {!proto.adventar.v1.Entry} returns this
*/
proto.adventar.v1.Entry.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adventar.v1.Entry.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Calendar calendar = 3;
 * @return {?proto.adventar.v1.Calendar}
 */
proto.adventar.v1.Entry.prototype.getCalendar = function() {
  return /** @type{?proto.adventar.v1.Calendar} */ (
    jspb.Message.getWrapperField(this, proto.adventar.v1.Calendar, 3));
};


/**
 * @param {?proto.adventar.v1.Calendar|undefined} value
 * @return {!proto.adventar.v1.Entry} returns this
*/
proto.adventar.v1.Entry.prototype.setCalendar = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.clearCalendar = function() {
  return this.setCalendar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adventar.v1.Entry.prototype.hasCalendar = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 day = 4;
 * @return {number}
 */
proto.adventar.v1.Entry.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.adventar.v1.Entry.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string url = 6;
 * @return {string}
 */
proto.adventar.v1.Entry.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.adventar.v1.Entry.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string image_url = 8;
 * @return {string}
 */
proto.adventar.v1.Entry.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.adventar.v1.Entry} returns this
 */
proto.adventar.v1.Entry.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adventar.v1.CalendarStat.prototype.toObject = function(opt_includeInstance) {
  return proto.adventar.v1.CalendarStat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adventar.v1.CalendarStat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.CalendarStat.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    calendarsCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    entriesCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adventar.v1.CalendarStat}
 */
proto.adventar.v1.CalendarStat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adventar.v1.CalendarStat;
  return proto.adventar.v1.CalendarStat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adventar.v1.CalendarStat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adventar.v1.CalendarStat}
 */
proto.adventar.v1.CalendarStat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCalendarsCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEntriesCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adventar.v1.CalendarStat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adventar.v1.CalendarStat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adventar.v1.CalendarStat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adventar.v1.CalendarStat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCalendarsCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEntriesCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.adventar.v1.CalendarStat.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.CalendarStat} returns this
 */
proto.adventar.v1.CalendarStat.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 calendars_count = 2;
 * @return {number}
 */
proto.adventar.v1.CalendarStat.prototype.getCalendarsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.CalendarStat} returns this
 */
proto.adventar.v1.CalendarStat.prototype.setCalendarsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 entries_count = 3;
 * @return {number}
 */
proto.adventar.v1.CalendarStat.prototype.getEntriesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.adventar.v1.CalendarStat} returns this
 */
proto.adventar.v1.CalendarStat.prototype.setEntriesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.adventar.v1);
