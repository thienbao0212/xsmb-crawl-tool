module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      date: String,
      type: String,
      result: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Lottery = mongoose.model("lottery", schema);
  return Lottery;
};
