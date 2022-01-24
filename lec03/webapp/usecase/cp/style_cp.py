from constraint import *


class StyleCP(object):
    def __init__(self):
        self.font_sizes = [12, 16, 20, 24, 28, 32]
        self.color_range = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

        self.problem = Problem()
        self.problem.reset()
        self.problem.addVariable('h1-r', self.color_range)
        self.problem.addVariable('h1-size', self.font_sizes)

    def get_solutions(self):
        return self.problem.getSolutions()

    def add_h1_r_constraint(self, h1_r_min=0, h1_r_max=100):
        self.problem.addConstraint(
            lambda h1_r: h1_r_min <= h1_r <= h1_r_max,
            ['h1-r'])

    def add_h1_size_constraint(self, h1_size_min=12, h1_size_max=32):
        self.problem.addConstraint(
            lambda h1_size: h1_size_min <= h1_size <= h1_size_max,
            ['h1-size'])


if __name__ == '__main__':
    cp = StyleCP()
    cp.add_h1_r_constraint(30, 70)
    cp.add_h1_size_constraint(16, 24)

    solutions = cp.get_solutions()

    for sol in solutions:
        print(sol)