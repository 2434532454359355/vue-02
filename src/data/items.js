// 假设我们有一个大数组包含所有物品
const allItems = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  image: 'https://via.placeholder.com/150',
  title: `商品 ${index + 1}`,
  description: '这是一个商品的简短描述。',
}));
