package mori.learning.shoppinglistapp.service;

import mori.learning.shoppinglistapp.entity.ShoppingItem;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ShoppingItemService {

    ShoppingItem saveShoppingItem(ShoppingItem item);

    List<ShoppingItem> fetchShoppingItemList();

    ShoppingItem updateShoppingItem(ShoppingItem item, Long id);

    void deleteShoppingItemById (Long id);
}
