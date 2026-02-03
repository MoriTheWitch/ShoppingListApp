package mori.learning.shoppinglistapp.repository;

import mori.learning.shoppinglistapp.entity.ShoppingItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingItemRepository extends CrudRepository<ShoppingItem, Long> {
}
