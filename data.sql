
INSERT INTO countries (country_id, country, create_date, last_update)
VALUES (1, 'U.S', NOW(), NOW()),
       (2, 'UK', NOW(), NOW()),
       (3, 'Canada', NOW(), NOW());
INSERT INTO state (state, state_id, create_date, last_update, country_id)
VALUES ('Alaska', 54, NOW(), NOW(), 1),
       ('Arizona', 02, NOW(), NOW(), 1),
       ('Arkansas', 03, NOW(), NOW(), 1),
       ('California', 04, NOW(), NOW(), 1),
       ('Colorado', 05, NOW(), NOW(), 1),
       ('Connecticut', 06, NOW(), NOW(), 1),
       ('Delaware', 07, NOW(), NOW(), 1),
       ('District of Columbia', 08, NOW(), NOW(), 1),
       ('Florida', 09, NOW(), NOW(), 1),
       ('Georgia', 10, NOW(), NOW(), 1),
       ('Hawaii', 52, NOW(), NOW(), 1),
       ('Idaho', 11, NOW(), NOW(), 1),
       ('Illinois', 12, NOW(), NOW(), 1),
       ('Indiana', 13, NOW(), NOW(), 1),
       ('Iowa', 14, NOW(), NOW(), 1),
       ('Kansas', 15, NOW(), NOW(), 1),
       ('Kentucky', 16, NOW(), NOW(), 1),
       ('Louisiana', 17, NOW(), NOW(), 1),
       ('Maine', 18, NOW(), NOW(), 1),
       ('Maryland', 19, NOW(), NOW(), 1),
       ('Massachusetts', 20, NOW(), NOW(), 1),
       ('Michigan', 21, NOW(), NOW(), 1),
       ('Minnesota', 22, NOW(), NOW(), 1),
       ('Mississippi', 23, NOW(), NOW(), 1),
       ('Missouri', 24, NOW(), NOW(), 1),
       ('Montana', 25, NOW(), NOW(), 1),
       ('Nebraska', 26, NOW(), NOW(), 1),
       ('Nevada', 27, NOW(), NOW(), 1),
       ('New Hampshire', 28, NOW(), NOW(), 1),
       ('New Jersey', 29, NOW(), NOW(), 1),
       ('New Mexico', 30, NOW(), NOW(), 1),
       ('New York', 31, NOW(), NOW(), 1),
       ('North Carolina', 32, NOW(), NOW(), 1),
       ('North Dakota', 33, NOW(), NOW(), 1),
       ('Ohio', 34, NOW(), NOW(), 1),
       ('Oklahoma', 35, NOW(), NOW(), 1),
       ('Oregon', 36, NOW(), NOW(), 1),
       ('Pennsylvania', 37, NOW(), NOW(), 1),
       ('Rhode Island', 38, NOW(), NOW(), 1),
       ('South Carolina', 39, NOW(), NOW(), 1),
       ('South Dakota', 40, NOW(), NOW(), 1),
       ('Tennessee', 41, NOW(), NOW(), 1),
       ('Texas', 42, NOW(), NOW(), 1),
       ('Utah', 43, NOW(), NOW(), 1),
       ('Vermont', 44, NOW(), NOW(), 1),
       ('Virginia', 45, NOW(), NOW(), 1),
       ('Washington', 46, NOW(), NOW(), 1),
       ('West Virginia', 47, NOW(), NOW(), 1),
       ('Wisconsin', 48, NOW(), NOW(), 1),
       ('Wyoming', 49, NOW(), NOW(), 1),
       ('Alberta', 61, NOW(), NOW(), 3),
       ('British Columbia', 62, NOW(), NOW(), 3),
       ('Manitoba', 63, NOW(), NOW(), 3),
       ('New Brunswick', 64, NOW(), NOW(), 3),
       ('Newfoundland and Labrador', 72, NOW(), NOW(), 3),
       ('Northwest Territories', 60, NOW(), NOW(), 3),
       ('Nova Scotia', 65, NOW(), NOW(), 3),
       ('Nunavut', 70, NOW(), NOW(), 3),
       ('Ontario', 67, NOW(), NOW(), 3),
       ('Prince Edward Island', 66, NOW(), NOW(), 3),
       ('Québec', 68, NOW(), NOW(), 3),
       ('Saskatchewan', 69, NOW(), NOW(), 3),
       ('Yukon', 71, NOW(), NOW(), 3),
       ('England', 101, NOW(), NOW(), 2),
       ('Wales', 102, NOW(), NOW(), 2),
       ('Scotland', 103, NOW(), NOW(), 2),
       ('Northern Ireland', 104, NOW(), NOW(), 2);
INSERT INTO customers (customer_id, address, create_date, customer_first_name, customer_last_name, last_update, phone, postal_code, division_id)
VALUES (1,'123 Easy St',default,'John','Doe',default,'(555)555-5555','55555',31);
INSERT INTO carts ( package_price, order_tracking_number, party_size, status, cart_id, create_date, last_update, customer_id)
VALUES (0, 0, 1, 'pending', default, default, default, 1);
INSERT INTO menu_items (create_date, last_update, description, image_url, menu_item_id, price, menu_item_title)
VALUES (
           NOW(),
           NOW(),
           'Sub sandwich with pepperoni',
           'https://www.twinsley.com/placeholder.png',
           default,
           10.99,
           'Pepperoni Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with Salami',
           'https://www.twinsley.com/placeholder.png',
           default,
           9.99,
           'Salami Sub'
       ),
    (
           NOW(),
     NOW(),
           'Sub sandwich with hot peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           18.99,
           'Hot Pepper Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with onions',
           'https://www.twinsley.com/placeholder.png',
           default,
           15.99,
           'Onion Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with ice',
           'https://www.twinsley.com/placeholder.png',
           default,
           29.99,
           'Ice Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with spaghetti',
           'https://www.twinsley.com/placeholder.png',
           default,
           10.99,
           'Spaghetti Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with steak',
           'https://www.twinsley.com/placeholder.png',
           default,
           59.99,
           'Steak Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with another sub inside',
           'https://www.twinsley.com/placeholder.png',
           default,
           30.99,
           'Sub Sub'
       ),
       (
           NOW(),
        NOW(),
           'Sub sandwich with coffee',
           'https://www.twinsley.com/placeholder.png',
           default,
           16.99,
           'Coffee Sub'
       ),
       (
           NOW(),
        NOW(),
           'Just a hamburger.',
           'https://www.twinsley.com/placeholder.png',
           default,
           5.99,
           'Basic Hamburger'
       ),
       (
           NOW(),
        NOW(),
           'Triple hamburger',
           'https://www.twinsley.com/placeholder.png',
           default,
           10.99,
           'Fancy hamburger'
       ),
       (
           NOW(),
        NOW(),
           'Hamburger with ice cream',
           'https://www.twinsley.com/placeholder.png',
           default,
           19.99,
           'Ice cream burger'
       ),
       (
           NOW(),
        NOW(),
           'Steak sandwich with hamburgers instead of bread',
           'https://www.twinsley.com/placeholder.png',
           default,
           100.99,
           'Meat lovers burger'
       ),
       (
           NOW(),
        NOW(),
           'Just two dozen eggs',
           'https://www.twinsley.com/placeholder.png',
           default,
           60.99,
           'Eggs'
       );
INSERT INTO toppings (create_date, last_update, topping_price, topping_title, image_url, topping_id, menu_item_id)
VALUES (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Pepperoni Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Salami Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Onion Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Hot Pepper Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Spaghetti Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Steak Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Sub Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Coffee Sub'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Basic Hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Fancy hamburger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Ice cream burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Meat lovers burger'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ketchup',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mustard',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Cheese',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Mayo',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Onion',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Hot Peppers',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       ),
       (
           NOW(),
        NOW(),
           0.55,
           'Ice Cubes',
           'https://www.twinsley.com/placeholder.png',
           default,
           (
               select menu_item_id
               from menu_items
               where menu_item_title = 'Eggs'
           )
       );
