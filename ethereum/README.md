# not_so_simple_nft

Чтобы получить адрес и ABI смартконтракта для использования на фронте, можно использовать следующие способы:

1) в папке ethereum запустить команду
```shell
npm run build
```
в этом случае необходимые данные будут помещены в файл  
**client/your_collectible.json** (внутренняя структура файла чуть более сложная )

2) в папке ethereum запустить команду
```shell
npm run deploy
```
в этом случае необходимые данные будут помещены в файл  
**ethereum/deployments/localhost/YourCollectible.json**
