package mori.learning.shoppinglistapp.service;

import mori.learning.shoppinglistapp.entity.ShoppingItem;
import mori.learning.shoppinglistapp.repository.ShoppingItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ShoppingItemServiceImpl implements ShoppingItemService {

    @Autowired
    ShoppingItemRepository repository;
    @Override
    public ShoppingItem saveShoppingItem(ShoppingItem item) {
        return repository.save(item);
    }

    @Override
    public List<ShoppingItem> fetchShoppingItemList() {
        return (List<ShoppingItem>) repository.findAll();
    }

    @Override
    public ShoppingItem updateShoppingItem(ShoppingItem item, Long id) {
        ShoppingItem dbItem = repository.findById(id).get();
        dbItem.setItemName(item.getItemName());
        dbItem.setItemCount(item.getItemCount());

        return repository.save(dbItem);
    }

    @Override
    public void deleteShoppingItemById(Long id) {
        repository.deleteById(id);
    }
}
