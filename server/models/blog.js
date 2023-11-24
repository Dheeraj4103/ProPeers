// Assuming you have already imported mongoose at the top
import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
    blogTitle: {
      type: String,
      required: "Blog must have a title",
    },
    blogContent: {
      type: String,
      required: "Blog must have content",
    },
    blogTags: {
      type: [String],
      required: "Blog must have tags",
    },
    userPosted: {
      type: String,
      required: "Blog must have an author",
    },
    userId: {
      type: String,
    },
    postedOn: {
      type: Date,
      default: Date.now,
    },
  });
  
  export default mongoose.model("Blog", blogSchema);
  