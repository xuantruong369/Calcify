# API Documentation

## POST /calculate

### Request

```json
{
  "a": 5,
  "b": 2,
  "operator": "+"
}
```

### Response

```json
{
  "result": 7
}
```

## GET /histories

```json
[
  {
    "expression": "5 + 2",
    "result": 7
  }
]
```
