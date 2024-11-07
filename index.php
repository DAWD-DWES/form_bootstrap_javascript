<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- Bootstrap Font Icon CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <title>Registro</title>
    </head>
    <body class="bg-info">
        <div class="container mt-5">
            <?php if (filter_has_var(INPUT_POST, 'enviar')): ?>
                <div class="alert alert-success" id="mensaje" role="alert">
                    Registro realizado con éxito
                </div>
            <?php else: ?>
                <div class="d-flex justify-content-center h-100">
                    <div class="card w-50">
                        <div class="card-header">
                            <h3><i class="bi bi-gear p-2"></i>Registro</h3>
                        </div>
                        <div class="card-body">
                            <form id="registro" name="registro" method="POST" action="<?= $_SERVER['PHP_SELF']; ?>" novalidate>
                                <div class="input-group my-2">
                                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                                    <input type="text" class="form-control"  placeholder="usuario" 
                                           id="usuario" name="usuario" minlength="3" autofocus required pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-`´]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-`´]+){0,5}$">
                                    <div class="invalid-feedback">
                                        El nombre de estar formado por al menos 3 caracteres de palabra
                                    </div>
                                </div>
                                <div class="input-group my-2">
                                    <span class="input-group-text"><i class="bi bi-key"></i></span>
                                    <input type="password" class="form-control" placeholder="contraseña" 
                                           id="password1" name="password1" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}">                      
                                </div>
                                <div class="input-group my-2">
                                    <span class="input-group-text"><i class="bi bi-key"></i></span>
                                    <input type="password" class="form-control"  placeholder="Repita la contraseña" 
                                           id="password2" name="password2" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}">
                                    <div class="invalid-feedback">
                                        El password debe tener una minúscula, mayúscula, digito y caracter espercial
                                    </div>
                                </div>
                                <div class="input-group my-2">
                                    <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                    <input type="email" class="form-control" placeholder="e-Mail" 
                                           id="email" name="email" required>
                                    <div class="invalid-feedback">
                                        El correo debe tener un formato correcto
                                    </div>
                                </div>
                                <div class="text-end">
                                    <input type="submit" value="Registrar" class="btn btn-info" name="enviar">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <?php endif ?>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="validar.js"></script>
    </body>
</html>