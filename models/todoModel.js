const mongoose = require('mongoose');
const slugify = require('slugify');

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please provide name for todo'],
      trim: true,
      maxlength: [40, 'name should be less than or equal to 40 character'],
      minlength: [5, 'name must have atleast 5 character'],
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

todoSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;