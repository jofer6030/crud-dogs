import Perro from "../models/Perro";

export const createDog = async (req, res) => {
  try {
    const newDog = new Perro(req.body);

    if (newDog.img === "") {
      newDog.img =
        "https://image.freepik.com/vector-gratis/dibujos-animados-avatar-lindo-perro-pastor-australiano_357749-252.jpg";
    }

    await newDog.save();

    res.status(200).json("Perro Creado");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDogs = async (req, res) => {
  try {
    const dogs = await Perro.find();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDog = async (req, res) => {
  try {
    const dog = await Perro.findById(req.params.id);
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDog = async (req, res) => {
  try {
    const updateDog = await Perro.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateDog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDog = async (req, res) => {
  try {
    await Perro.findByIdAndDelete(req.params.id);
    res.status(200).json("Perro borrado");
  } catch (error) {
    res.status(500).json(error);
  }
};
