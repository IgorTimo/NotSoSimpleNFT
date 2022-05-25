# not_so_simple_nft

## Получение адреса и ABI смартконтракта для использования на фронте

1) в папке ethereum выполнить команду
```shell
npm run build
```
в этом случае необходимые данные будут помещены в файл  
**client/your_collectible.json** (внутренняя структура файла чуть более сложная )

2) в папке ethereum выполнить команду
```shell
npm run deploy
```
в этом случае необходимые данные будут помещены в файл  
**ethereum/deployments/localhost/YourCollectible.json**

## Запуск локального блокчейна с задеплоеным смартконтрактом YourCollectible
в папке ethereum выполнить команду
```shell
npm run hh
```
(предварительно установив зависимости командой **npm ci** )
