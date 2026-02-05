package mori.learning.shoppinglistapp.control;

import mori.learning.shoppinglistapp.entity.ShoppingItem;
import mori.learning.shoppinglistapp.repository.ShoppingItemRepository;
import mori.learning.shoppinglistapp.service.ShoppingItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ShoppingItemController {
    @Autowired
    ShoppingItemService service;

    @PostMapping("/shoppingItems")
    public ShoppingItem saveShoppingItem(@RequestBody ShoppingItem item){
        return service.saveShoppingItem(item);
    }

    @GetMapping("/shoppingItems")
    public List<ShoppingItem> fetchShoppingList(){
        return service.fetchShoppingItemList();
    }

    @PutMapping("/shoppingItems/{id}")
    public ShoppingItem updateShoppingItem(@RequestBody ShoppingItem updateValuesItem, @PathVariable Long id){
        return service.updateShoppingItem(updateValuesItem, id);
    }

    @DeleteMapping("/shoppingItems/{id}")
    public String deleteShoppingItem(@PathVariable Long id){
        service.deleteShoppingItemById(id);
        return "Item deleted";
    }


}
