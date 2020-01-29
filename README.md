# Javascript - Objects

Completa los siguientes ejercicios trabajando en **main.js**. Luego ingresa a **index.html** desde el navegador y comprueba si los tests pasaron.

### Objetos literales:

Crea un objeto llamado **fiat500** con los siguientes **atributos** y **metodos**:

#### Atrobutos:

- name: string, con el valor: "Fiat".
- model: number, con el valor: 500.
- weight : number, con el valor: 850.
- color: string, con el valor: "white".
- owners: array, con los valores: "Jason", "Sara" y "Cacho".

#### Metodos:

- start(): devuelve un string con el texto "Encender...".
- drive(): devuelve un string con el texto "Manejar...".
- brake(): devuelve un string con el texto "Detener...".
- stop(): devuelve un string con el texto "Apagar...".

### This:

Crea un objeto llamado **peugeot208** con los siguientes **atributos** y **metodos**:

#### Atrobutos:

- name: string, con el valor: "Peugeot".
- model: number, con el valor: 208.
- weight : number, con el valor: 950.
- color: string, con el valor: "black".
- owners: array, con los valores: "Monica", "Jeorge" y "Fernanda". El dueño actual del auto es el ultimo "owner". En este caso: "Fernanda"
- state: string, con el valor: "Apagado". Los unicos valores que acepta este campo son: "Apagado", "Encendido", "Detenido" y "En movimiento".

#### Metodos:

- info(): devuelve un string con el texto: "Este auto marca [$name], es modelo [$model], pesa exactamente [$weight]kg, su color es [$color] y su actual dueño es [$owners]". Reemplazar los valores con el signo "\$" por los valores de peugeot208.

- start(): devuelve un string con el texto "Encender..." y cambie el atributo **state** a **"Encendido"** solo si su estado actual es **"Apagado"**. Si el estado actual no es **"Apagado"** devolver el siguiente mensaje: "No puede encender el auto si esta: $estado_actual" (Reemplazar $estado_actual con el atributo **state**)

- drive(): devuelve un string con el texto "Manejar..." y cambie el atributo **state** a **"En movimiento"** solo si su estado actual es **"Encendido"**. Si el estado actual no es **"Encendido"** devolver el siguiente mensaje: "No puede manejar el auto si esta: $estado_actual" (Reemplazar $estado_actual con el atributo **state**)

- brake(): devuelve un string con el texto "Detener..." y cambie el atributo **state** a **"Detenido"** solo si su estado actual es **"En movimiento"**. Si el estado actual no es **"En movimiento"** devolver el siguiente mensaje: "No puede frenar el auto si esta: $estado_actual" (Reemplazar $estado_actual con el atributo **state**)

- stop(): devuelve un string con el texto "Apagar..." y cambie el atributo **state** a **"Apagado"** solo si su estado actual es **"Detenido"**. Si el estado actual no es **"Detenido"** devolver el siguiente mensaje: "No puede detener el auto si esta: $estado_actual" (Reemplazar $estado_actual con el atributo **state**)
