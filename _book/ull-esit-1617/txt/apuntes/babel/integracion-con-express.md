# 13. Integración con Express

Otro ejemplo de uso de Babel, es con Express. Cuando queremos consultar la base de datos podemos tener muchas operaciones asíncronas, y con `async` y `await` nos queda mucho más simple.

```JavaScript
import { router } from 'express'
import { User } from './models'

router.post('/users/create', async (req, res) => {
  let { email, password } = req.body
  if (await User.find({email})) {
    return res.status(400).send('Ese correo ya existe')
  }
  let user = new User({email, password})
  await user.save()
  res.send('Te has registrado correctamente')
})
```
