Search.setIndex({"docnames": ["dev/implementation-notes", "dev/index", "dev/releasing", "helper-functions", "index", "supported-array-libraries"], "filenames": ["dev/implementation-notes.md", "dev/index.md", "dev/releasing.md", "helper-functions.rst", "index.md", "supported-array-libraries.md"], "titles": ["Implementation Notes", "Development Notes", "Releasing", "Helper Functions", "Array API compatibility library", "Supported Array Libraries"], "terms": {"thi": [0, 1, 2, 3, 4, 5], "page": [0, 5], "outlin": [0, 5], "some": [0, 2, 3, 4], "arrai": [0, 1], "api": [0, 1, 3, 5], "compat": [0, 1, 3, 5], "These": [0, 3], "detail": 0, "ar": [0, 2, 3, 4, 5], "import": [0, 3, 4], "user": [0, 4], "packag": [0, 2, 4, 5], "thei": [0, 4], "mai": [0, 3, 4, 5], "us": [0, 2, 3, 4, 5], "contributor": [0, 1], "requir": [0, 4, 5], "develop": [0, 4], "differ": [0, 3, 5], "from": [0, 2, 3, 4, 5], "most": [0, 4], "other": [0, 2, 4, 5], "python": [0, 4], "librari": [0, 3], "The": [0, 3, 4, 5], "goal": [0, 4], "i": [0, 1, 2, 3, 4, 5], "small": [0, 4], "can": [0, 2, 3, 4, 5], "either": [0, 3, 4], "vendor": [0, 2], "add": [0, 4, 5], "depend": [0, 4], "support": [0, 3, 4], "consequ": [0, 3], "certain": [0, 4], "design": 0, "should": [0, 2, 4, 5], "taken": 0, "account": 0, "No": [0, 5], "hard": [0, 2], "although": [0, 4], "numpi": [0, 3, 4], "cupi": [0, 2, 3, 4], "pytorch": [0, 3, 4], "etc": [0, 4], "doe": [0, 2, 3, 4, 5], "them": [0, 3, 5], "unless": [0, 2, 5], "an": [0, 2, 3, 4, 5], "object": [0, 3, 4, 5], "pass": [0, 2, 3, 4], "array_namespac": [0, 4, 5], "specif": [0, 3, 4, 5], "array_api_compat": [0, 2, 3], "namespac": [0, 3, 4, 5], "sub": 0, "explicitli": [0, 3, 4, 5], "mean": [0, 2, 3, 4], "instanc": [0, 2, 3, 4], "all": [0, 2, 4, 5], "rel": [0, 4], "refer": [0, 4], "name": [0, 2, 4], "we": [0, 4, 5], "also": [0, 2, 3, 4, 5], "renam": [0, 4], "someth": [0, 4], "els": [0, 4], "test_vendor": 0, "py": [0, 2], "pure": 0, "To": [0, 2, 4], "make": [0, 2, 4], "easi": [0, 4], "possibl": [0, 4, 5], "minim": [0, 4], "wrap": [0, 3, 4, 5], "onli": [0, 3, 5], "function": [0, 4, 5], "difficult": 0, "try": [0, 2], "behavior": [0, 4, 5], "would": [0, 2, 3, 4], "signific": 0, "amount": 0, "prefer": [0, 3, 4], "leav": [0, 4], "upstream": [0, 4], "issu": [0, 2, 3, 4, 5], "document": [0, 1], "known": [0, 4, 5], "do": [0, 3, 4, 5], "point": [0, 3, 5], "time": [0, 4, 5], "anyth": [0, 4], "than": [0, 5], "wrapper": [0, 4, 5], "standard": [0, 3, 4, 5], "basic": 0, "helper": [0, 4, 5], "addit": [0, 3, 4], "part": [0, 3, 4], "current": [0, 3, 4], "out": [0, 3, 4], "scope": [0, 5], "side": 0, "effect": [0, 3, 5], "local": 0, "It": [0, 1, 2, 4, 5], "invis": 0, "end": [0, 4], "particular": [0, 4, 5], "impli": 0, "next": 0, "two": 0, "monkei": [0, 3, 5], "patch": [0, 3, 5], "attempt": [0, 3, 5], "modifi": [0, 5], "about": 0, "underli": [0, 2], "tensor": [0, 3, 4, 5], "cannot": [0, 3, 4], "preclud": 0, "creation": 0, "subclass": [0, 3], "class": 0, "ani": [0, 2, 3, 4, 5], "built": 0, "method": [0, 4, 5], "therefor": [0, 3], "left": 0, "unwrap": [0, 5], "workaround": [0, 5], "correspond": [0, 3, 4, 5], "elementwis": [0, 3], "instead": [0, 3, 5], "oper": [0, 3, 5], "provid": [0, 3, 4, 5], "attribut": [0, 3, 5], "like": [0, 3, 4, 5], "x": [0, 3, 4, 5], "to_devic": [0, 3, 5], "restrict": 0, "outsid": [0, 4], "have": [0, 3, 4, 5], "what": [0, 2], "specifi": [0, 3], "intact": 0, "whenev": 0, "disallow": [0, 4], "extend": 0, "you": [0, 2, 3, 4, 5], "notic": 0, "extens": [0, 4, 5], "variou": [0, 4], "file": [0, 2], "while": 0, "normal": [0, 4], "question": 0, "one": [0, 3, 4], "actual": 0, "legitim": 0, "case": [0, 4], "re": [0, 5], "export": 0, "extern": 0, "kwarg": 0, "through": [0, 1], "input": [0, 4], "type": [0, 3, 4, 5], "work": [0, 2, 3, 4, 5], "scalar": [0, 3, 5], "np": [0, 3, 4, 5], "ndarrai": [0, 3, 4, 5], "By": 0, "keep": [0, 4], "easier": 0, "swap": 0, "write": 0, "path": [0, 4], "onu": 0, "ensur": [0, 4], "portabl": [0, 3, 5], "e": [0, 3, 4, 5], "g": [0, 4, 5], "against": [0, 4], "strict": [0, 4], "sinc": [0, 3, 4], "degre": 0, "dask": [0, 3, 4], "nearli": 0, "ident": 0, "logic": 0, "share": 0, "between": [0, 5], "same": [0, 3, 4, 5], "multipl": 0, "common": [0, 4], "defin": [0, 3, 5], "In": [0, 3, 4, 5], "_alias": 0, "def": [0, 3, 4], "aco": 0, "xp": [0, 3, 4, 5], "return": [0, 3, 4, 5], "arcco": 0, "argument": [0, 3, 5], "origin": [0, 2, 5], "Then": 0, "get_xp": 0, "decor": 0, "appli": [0, 5], "which": [0, 3, 4, 5], "automat": [0, 2], "remov": [0, 2], "signatur": 0, "replac": [0, 5], "now": [0, 3, 4], "ha": [0, 2, 3, 4, 5], "call": 0, "similarli": 0, "cp": [0, 4, 5], "wai": [0, 3, 4], "similar": [0, 4], "layout": 0, "torch": [0, 4, 5], "enough": 0, "veri": 0, "few": [0, 4, 5], "those": [0, 2, 4, 5], "reus": [0, 5], "close": 0, "so": [0, 2, 4, 5], "major": 0, "suit": [0, 4], "There": [0, 4], "limit": [0, 4, 5], "thing": [0, 2, 4], "strictli": [0, 5], "run": [0, 2], "ci": [0, 2], "except": [0, 4], "jax": [0, 3, 4], "achiev": 0, "reusabl": 0, "github": [0, 2, 5], "action": [0, 2], "workflow": 0, "must": [0, 2], "xfail": [0, 2], "skip": 0, "reason": [0, 2, 4, 5], "txt": [0, 2], "forward": 0, "often": 0, "need": [0, 2, 3, 4], "updat": [0, 2], "new": 0, "becaus": [0, 2, 3, 4], "featur": 0, "wa": 0, "previous": 0, "thought": 0, "flaki": [0, 2], "fail": [0, 2], "organ": 0, "comment": 0, "xpass": [0, 2], "awar": [0, 2], "mani": [0, 4, 5], "know": [0, 2], "been": [0, 2, 3, 4], "fix": [0, 2], "gpu": [0, 2], "script": [0, 2], "test_cupi": [0, 2], "sh": [0, 2], "manual": [0, 2], "machin": [0, 2], "cuda": [0, 2, 3], "intern": 1, "relat": 1, "recommend": [1, 5], "read": 1, "implement": [1, 3, 4, 5], "releas": 1, "first": 2, "sure": 2, "test": [2, 3, 4], "main": [2, 4], "note": [2, 3, 4, 5], "isn": [2, 4], "t": [2, 3, 4, 5], "onc": 2, "readi": 2, "creat": [2, 4], "pr": 2, "branch": 2, "verifi": 2, "edit": 2, "__init__": 2, "version": [2, 3, 4, 5], "comput": 2, "tag": 2, "break": 2, "changelog": 2, "md": 2, "chang": [2, 4], "everyth": 2, "git": 2, "prefix": 2, "1": [2, 5], "5": 2, "just": [2, 4], "push": 2, "check": 2, "publish": 2, "distribut": 2, "build": 2, "even": [2, 4, 5], "befor": 2, "ignor": 2, "failur": 2, "ideal": [2, 4], "otherwis": 2, "tell": 2, "futur": [2, 4], "": 2, "good": 2, "idea": 2, "probabl": 2, "still": [2, 5], "If": [2, 3, 4, 5], "didn": 2, "upload": 2, "pypi": [2, 4], "delet": 2, "again": 2, "after": 2, "conda": [2, 4], "forg": [2, 4], "bot": 2, "feedstock": 2, "sever": [3, 5], "includ": [3, 4, 5], "here": [3, 4, 5], "aren": 3, "primari": 3, "entri": 3, "consum": [3, 4], "api_vers": 3, "none": 3, "_use_compat": 3, "true": [3, 5], "get": [3, 4], "paramet": 3, "more": [3, 4], "str": 3, "newest": 3, "spec": [3, 4, 5], "v2022": 3, "12": [3, 4, 5], "rais": 3, "typeerror": 3, "contain": [3, 4, 5], "non": [3, 4], "typic": [3, 4], "usag": 3, "top": 3, "your_funct": [3, 4], "y": [3, 4, 5], "axi": [3, 4], "0": [3, 4, 5], "2": [3, 4, 5], "std": [3, 4, 5], "directli": [3, 4], "For": [3, 4, 5], "exampl": [3, 4, 5], "__array_namespace__": [3, 5], "alwai": 3, "exist": 3, "is_array_api_obj": 3, "is_numpy_arrai": 3, "is_cupy_arrai": 3, "is_torch_arrai": 3, "is_dask_arrai": 3, "is_jax_arrai": 3, "http": [3, 5], "data": [3, 4], "org": 3, "latest": [3, 5], "api_specif": 3, "array_object": 3, "html": 3, "__add__": 3, "elementwise_funct": 3, "devic": [3, 5], "hardwar": 3, "resid": 3, "equival": 3, "accord": 3, "incompat": [3, 4], "see": [3, 4, 5], "section": 3, "cpu": 3, "special": 3, "dask_devic": 3, "move": 3, "stream": [3, 5], "int": 3, "copi": [3, 4, 5], "option": [3, 5], "union": 3, "dure": 3, "__dlpack__": [3, 5], "choos": 3, "caveat": 3, "code": [3, 4], "locat": 3, "noth": 3, "size": [3, 5], "total": 3, "number": 3, "element": 3, "conveni": 3, "come": 3, "without": [3, 5], "hasn": 3, "yet": [3, 4], "alreadi": 3, "cheap": 3, "around": [4, 5], "want": [4, 5], "encount": 4, "pleas": 4, "open": [4, 5], "backward": 4, "eventu": 4, "each": 4, "itself": 4, "fulli": 4, "take": 4, "2022": 4, "avail": 4, "both": 4, "m": 4, "pip": 4, "channel": 4, "compliant": [4, 5], "wish": 4, "da": 4, "submodul": 4, "experiment": 4, "array_api": 4, "modul": 4, "simpli": 4, "consist": 4, "correct": [4, 5], "formerli": 4, "nep": [4, 5], "47": 4, "cross": [4, 5], "kind": 4, "promot": [4, 5], "hand": 4, "mention": 4, "allow": 4, "cast": [4, 5], "unlik": [4, 5], "separ": 4, "rather": 4, "go": 4, "below": 4, "affect": 4, "author": 4, "default": 4, "appropri": 4, "place": 4, "r": 4, "mylib": 4, "nowher": 4, "altern": 4, "At": 4, "compli": 4, "set": 4, "meta": 4, "aid": 4, "necessari": [4, 5], "draft": 4, "complic": 4, "correctli": 4, "maintain": 4, "request": [4, 5], "inclus": 4, "why": 4, "firstli": 4, "primarili": 4, "polyfil": 4, "shim": 4, "let": 4, "todai": 4, "world": 4, "hope": 4, "unnecessari": 4, "everi": 4, "undermin": 4, "But": 4, "much": [4, 5], "importantli": 4, "consortium": 4, "via": 4, "consensu": 4, "stakehold": 4, "were": 4, "becom": 4, "de": 4, "facto": 4, "bypass": 4, "decis": 4, "process": 4, "secondli": 4, "possibli": 4, "thirdli": 4, "team": 4, "pull": [4, 5], "necessarili": 4, "receiv": 4, "stringent": 4, "level": 4, "scrutini": 4, "establish": 4, "fine": 4, "clean": 4, "up": 4, "inconsist": 4, "complex": [4, 5], "base": [4, 5], "furthermor": 4, "rigor": 4, "gener": 4, "follow": 5, "popular": 5, "assum": 5, "too": 5, "your": 5, "favorit": 5, "feel": 5, "free": 5, "full": 5, "well": 5, "26": 5, "deviat": 5, "mt": 5, "don": 5, "miss": 5, "linalg": 5, "matrix_transpos": 5, "valu": 5, "disabl": 5, "environ": 5, "variabl": 5, "npy_promotion_st": 5, "weak": 5, "_set_promotion_st": 5, "24": 5, "newer": 5, "50": 5, "com": 5, "22341": 5, "asarrai": 5, "fals": 5, "annot": 5, "posit": 5, "minimum": 5, "21": 5, "howev": 5, "older": 5, "unique_": 5, "compar": 5, "nan": 5, "unequ": 5, "finfo": 5, "smallest_norm": 5, "from_dlpack": 5, "argmax": 5, "argmin": 5, "keepdim": 5, "qr": 5, "doesn": 5, "matrix": 5, "stack": 5, "abov": 5, "d": 5, "bump": 5, "behav": 5, "unsign": 5, "integ": 5, "uint8": 5, "made": 5, "semant": 5, "concern": 5, "form": 5, "unique_al": 5, "due": 5, "fact": 5, "uniqu": 5, "indic": 5, "slice": 5, "neg": 5, "step": 5, "var": 5, "float": 5, "As": 5, "exactli": 5, "match": 5, "13": 5, "entir": 5, "track": 5, "googl": 5, "18353": 5, "besid": 5, "sort": 5, "argsort": 5, "fft": 5, "find": 5, "under": 5, "own": 5, "risk": 5, "det": 5, "eigh": 5, "eigvalsh": 5, "matrix_pow": 5, "pinv": 5, "slogdet": 5, "matrix_norm": 5, "matrix_rank": 5, "partial": 5, "incorrect": 5, "result": 5, "2023": 5}, "objects": {"array_api_compat": [[3, 0, 1, "", "array_namespace"], [3, 0, 1, "", "device"], [3, 0, 1, "", "is_array_api_obj"], [3, 0, 1, "", "is_cupy_array"], [3, 0, 1, "", "is_dask_array"], [3, 0, 1, "", "is_jax_array"], [3, 0, 1, "", "is_numpy_array"], [3, 0, 1, "", "is_torch_array"], [3, 0, 1, "", "size"], [3, 0, 1, "", "to_device"]]}, "objtypes": {"0": "py:function"}, "objnames": {"0": ["py", "function", "Python function"]}, "titleterms": {"implement": 0, "note": [0, 1], "special": 0, "consider": 0, "avoid": 0, "code": 0, "duplic": 0, "test": 0, "develop": 1, "releas": 2, "helper": 3, "function": 3, "array_namespac": 3, "arrai": [3, 4, 5], "method": 3, "inspect": 3, "api": 4, "compat": 4, "librari": [4, 5], "instal": 4, "usag": 4, "differ": 4, "between": 4, "array_api_compat": 4, "array_api_strict": 4, "vendor": 4, "scope": 4, "support": 5, "numpi": 5, "cupi": 5, "pytorch": 5, "jax": 5, "dask": 5}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Implementation Notes": [[0, "implementation-notes"]], "Special Considerations": [[0, "special-considerations"]], "Avoiding Code Duplication": [[0, "avoiding-code-duplication"]], "Tests": [[0, "tests"]], "Development Notes": [[1, "development-notes"]], "Releasing": [[2, "releasing"]], "Helper Functions": [[3, "helper-functions"]], "array_namespace": [[3, "array-namespace"]], "Array Method Helpers": [[3, "array-method-helpers"]], "Inspection Helpers": [[3, "inspection-helpers"]], "Array API compatibility library": [[4, "array-api-compatibility-library"]], "Installation": [[4, "installation"]], "Usage": [[4, "usage"]], "Difference between array_api_compat and array_api_strict": [[4, "difference-between-array-api-compat-and-array-api-strict"]], "Vendoring": [[4, "vendoring"]], "Scope": [[4, "scope"]], "Supported Array Libraries": [[5, "supported-array-libraries"]], "NumPy and CuPy": [[5, "numpy-and-cupy"]], "PyTorch": [[5, "pytorch"]], "JAX": [[5, "jax"]], "Dask": [[5, "dask"]]}, "indexentries": {"array_namespace() (in module array_api_compat)": [[3, "array_api_compat.array_namespace"]], "device() (in module array_api_compat)": [[3, "array_api_compat.device"]], "is_array_api_obj() (in module array_api_compat)": [[3, "array_api_compat.is_array_api_obj"]], "is_cupy_array() (in module array_api_compat)": [[3, "array_api_compat.is_cupy_array"]], "is_dask_array() (in module array_api_compat)": [[3, "array_api_compat.is_dask_array"]], "is_jax_array() (in module array_api_compat)": [[3, "array_api_compat.is_jax_array"]], "is_numpy_array() (in module array_api_compat)": [[3, "array_api_compat.is_numpy_array"]], "is_torch_array() (in module array_api_compat)": [[3, "array_api_compat.is_torch_array"]], "size() (in module array_api_compat)": [[3, "array_api_compat.size"]], "to_device() (in module array_api_compat)": [[3, "array_api_compat.to_device"]]}})