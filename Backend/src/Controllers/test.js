import Category from "../Models/category.model.js";

const allsubCategories = async (categoryId) => {
  try {
    const result = [];
    const stack = [categoryId];

    while (stack.length > 0) {
      const currentId = stack.pop();

      const subcategories = await Category.find({ parentId: currentId });
      console.log(subcategories);

      for(const child of subcategories){
        result.push(child.name)
      }
    }

    return result[0]
  } catch (error) {
    throw new Error("something error");
  }
};

const test = async (req, res) => {
  try {
    const category = await Category.findById(req.params);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    await allsubCategories(category._id);
  } catch (error) {
  return res
        .status(404)
        .json({ success: false, message: error.message });
  }
};

export { test };
