import * as Yup from "yup";

import User from "../models/User";

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Wrong email or password. Try again." });
    }

    const { email, password } = request.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return response
        .status(400)
        .json({ error: "Wrong email or password. Try again." });
    }
    return response.json(user);
  }
}

export default new SessionController();
